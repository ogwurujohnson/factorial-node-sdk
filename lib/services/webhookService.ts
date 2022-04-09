import { Api } from "../api/api.js";
import * as Types from "./_types.js";

interface WebhookListRequest {
  after?: string;
  before?: string;
  limit?: string;
  sort_direction?: Types.SortDirection;
}

interface WebhookListResponse extends Types.APIResponse {
  data: Types.Webhook[];
}

interface WebhookResponse extends Types.APIResponse {
  data: Types.Webhook;
}

export class WebhookService {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async create(
    requestParameters: Types.Webhook,
    customHeaders: Types.JsonMap = {}
  ): Promise<WebhookResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/core/webhooks",
      method: "post",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: WebhookResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async list(
    requestParameters: WebhookListRequest
  ): Promise<WebhookListResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/core/webhooks",
      method: "get",
      urlParameters,
      requestParameters,
    };

    const response = await this.api.request(requestParams);

    return response;
  }

  async delete(
    requestParameters: Types.Webhook,
    customHeaders: Types.JsonMap = {}
  ): Promise<WebhookResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/core/webhooks",
      method: "delete",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: WebhookResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  /**
   * @param {Webhook} webhhok - Webhook object
   * @returns {JSON}  A JSON response containing the details of the webhook
   * @memberof FactorialHR
   */
  // async createWebhook(webhook: Webhook) {
  //   try {
  //     const response = await this.base.request.post("/webhooks", {
  //       ...webhook
  //     });

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @returns {JSON}  A JSON response containing the list of webhooks
   * @memberof FactorialHR
   */
  // async getWebhooks() {
  //   try {
  //     const response = await this.base.request.get("/webhooks");

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {string} type - webhook type
   * @memberof FactorialHR
   */
  // async deleteWebhook(type: string) {
  //   try {
  //     const response = await this.base.request.delete(`/webhooks`, {
  //       type
  //     });

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }
}
