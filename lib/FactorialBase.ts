import axios from "axios";
import config from "./utils/config";

class FactorialBase {
  token: string;
  request: any;
  base_url = config.baseUrl;

  /**
   *This is a constructor for creating a FactorialHR Instance
   * @param {string} token - FactorialHR token
   * @returns { FactorialHR } - An instance of FactorialHR
   */

  //  TODO: add production flag in the future
  constructor(token: string) {
    this.token = token;
    this.request = axios.create({
      baseURL: this.getBaseUrl(),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  }

  /**
   * @returns {String}  The authorization token
   * @memberof FactorialHR
  */
  getToken() {
    return this.token;
  }

  /**
   * @returns {String}  The base URL
   * @memberof FactorialHR
  */
  getBaseUrl() {
    return this.base_url;
  }

  /**
   * @param {String} new_base_url - The new base url
   * @description {JSON}  Updates the base URL
   * @memberof FactorialHR
  */
  setBaseUrl(new_base_url: string) {
    if (new_base_url) {
      this.base_url = new_base_url;
    }
  }
}

export default FactorialBase;
