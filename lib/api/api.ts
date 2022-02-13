import os = require("os");
import process = require("process");
import * as url from "url";
// import { ParseError, HTTPError } from "got";
import got from "got";
import qs from "qs";

import { CLIENT_VERSION, API_VERSION } from "../constants";
import * as FactorialHRErrors from "../errors";

interface APIOptions {
  proxy?: object;
  raiseOnIdempotencyConflict?: boolean;
}

interface UrlParameter {
  key?: string;
  value?: string;
}

interface APIRequestParameters {
  path: string;
  method: string;
  urlParameters?: UrlParameter[];
  requestParameters?: object;
  payloadKey?: string;
  customHeaders?: object;
}

export class Api {
  private _token: string;
  private _baseUrl: string;
  private _agent: object;

  private processVersion: string;
  private osRelease: string;
  private osPlatform;

  constructor(
    token: string,
    options: APIOptions
  ) {
    this._token = token;

    this._baseUrl = "https://api.factorialhr.com";

    this._agent = undefined;
    if (options.proxy) {
      this._agent = options.proxy;
    }

    this.processVersion = process.version;
    this.osPlatform = os.platform();
    this.osRelease = os.release();
  }

  async request({
    path,
    method,
    urlParameters = [],
    requestParameters = {},
    payloadKey = "",
    customHeaders = {},
  }: APIRequestParameters) {
    urlParameters.forEach(urlParameter => {
      path = path.replace(`:${urlParameter.key}`, urlParameter.value);
    });

    // `got` adds a slash to the end of `prefix_url` so we don't want one at the
    // start of the path
    if (path[0] === "/") {
      path = path.slice(1);
    }

    const requestOptions = this.createRequestOptions(
      method,
      requestParameters,
      payloadKey,
      customHeaders
    );

    try {
      const response = await got(path, requestOptions);

      return {
        body: response.body,
        __response__: {
          headers: response.headers,
          statusCode: response.statusCode,
          statusMessage: response.statusMessage,
          url: response.url,
        },
      };
    } catch (e) {
      // if (e instanceof ParseError) {
      //   throw new FactorialHRErrors.MalformedResponseError(
      //     "Malformed JSON received from FactorialHR API",
      //     e.response
      //   );
      // }

      // if (e instanceof HTTPError) {
      //   const err = FactorialHRErrors.ApiError.buildFromResponse(e.response);
      //   throw err;
      // }

      throw e;
    }
  }

  private getHeaders(token: string, customHeaders = {}) {
    const mandatoryHeaders = {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "FactorialHR-Version": `${API_VERSION}`,
      "FactorialHR-Client-Version": `${CLIENT_VERSION}`,
      "FactorialHR-Client-Library": "factorialhr-nodejs",
      "User-Agent": `factorialhr-nodejs/${CLIENT_VERSION} node/${this.processVersion} ${this.osPlatform}/${this.osRelease}`,
    };

    return { ...customHeaders, ...mandatoryHeaders };
  }

  private createRequestOptions(
    method = "get",
    requestParameters = {},
    payloadKey = "",
    customHeaders = {}
  ) {
    const headers = this.getHeaders(this._token, customHeaders);
    const searchParams =
      method === "get"
        ? new url.URLSearchParams(this.formatQueryParameters(requestParameters))
        : undefined;

    const json = this.getRequestBody(method, requestParameters, payloadKey);
    return {
      agent: this._agent,
      prefixUrl: this._baseUrl,
      // tslint:disable-next-line:no-any
      method: method as any,
      responseType: "json" as const,
      headers,
      searchParams,
      json,
    };
  }

  private getRequestBody(method: string, requestParameters: any, payloadKey: any) {
    if ((method === "post" || method === "put") && requestParameters) {
      if (payloadKey) {
        return {
          [payloadKey]: requestParameters,
        };
      } else {
        return {
          data: requestParameters,
        };
      }
    }

    return undefined;
  }

  private formatQueryParameters(parameters: any) {
    return qs.stringify(parameters, {
      encode: false,
      indices: false,
      arrayFormat: "comma",
    });
  }
}