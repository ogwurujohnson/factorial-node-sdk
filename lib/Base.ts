import axios from "axios";
import config from "./utils/config";

class Base {
  token: string;
  request: any;

  /**
   *This is a constructor for creating a FactorialHR Instance
   * @param {string} token - FactorialHR token
   * @returns { FactorialHR } - An instance of FactorialHR
   */
  constructor(token: string) {
    this.token = token;
    this.request = axios.create({
      baseURL: config.baseUrl,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  }
}

export default Base;