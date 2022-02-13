import { Api } from "../api/api";
import Helper from "../utils/Helper";
import { Webhook } from "./_types";

export class WebhookService {
  private api: Api;

  constructor(api: Api) {
      this.api = api;
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
