import axios from "axios";
import config from "./utils/config";
import Helper from "./utils/Helper";

class FactorialHR {
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

  /**
   * @returns {JSON}  A JSON response containing the details of the user
   * @memberof FactorialHR
   */
  async getEmployees () {
    try {
      const response = await this.request.get("/employees");

      return response.data;
    } catch (e) {
      console.log(e);
      // Helper.processError(e);
    }
  }
}

export default FactorialHR;
