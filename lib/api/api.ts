import os from "os";
import process from "process";
import * as url from "url";
import qs from "qs";
import axios from "axios"

import { CLIENT_VERSION, API_VERSION } from "../constants.js";
import * as FactorialHRErrors from "../errors.js";

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
  payloadKey?: string | null;
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

    this._baseUrl = "https://api.factorialhr.com/api";

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

    const requestOptions = this.createRequestOptions(
      method,
      requestParameters,
      payloadKey,
      customHeaders
    );

    try {
      const response = await axios(path, requestOptions);

      return {
        data: response.data,
        __response__: {
          headers: response.headers,
          statusCode: response.status,
          statusMessage: response.statusText,
          url: response.config.url,
        },
      };
    } catch (e) {
      console.log(e)
      // TODO: handle errors properly
      // if (axios.isAxiosError(e)) {
      //   e.response
      //   const err = FactorialHRErrors.ApiError.buildFromResponse(e.response);
      //   throw err;
      // }

      // throw e;
    }
  }

  private getHeaders(token: string, customHeaders = {}) {
    const mandatoryHeaders = {
      "Content-Type": "application/json",
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
    payloadKey: string | null = null,
    customHeaders = {}
  ) {
    const headers = this.getHeaders(this._token, customHeaders);
    const params =
      method === "get"
        ? new url.URLSearchParams(this.formatQueryParameters(requestParameters))
        : undefined;
    const data = this.getRequestBody(method, requestParameters, payloadKey);
  
    return {
      agent: this._agent,
      baseURL: this._baseUrl,
      // tslint:disable-next-line:no-any
      method: method as any,
      responseType: "json" as const,
      headers,
      params,
      data,
      transitional: { silentJSONParsing: true }
    };
  }

  private getRequestBody(method: string, requestParameters: any, payloadKey: any) {
    if ((method === "post" || method === "put") && requestParameters) {
      if (payloadKey) {
        return {
          [payloadKey]: {...requestParameters},
        };
      } else {
        return {
          ...requestParameters,
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