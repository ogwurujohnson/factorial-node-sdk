import axios from "axios";
import config from "./utils/config";
import Helper from "./utils/Helper";
import { BasicEmployee } from "./types";

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
   * @param {BasicEmployee} employee - Basic Employee object
   * @returns {JSON}  A JSON response containing the details of the employee
   * @memberof FactorialHR
   */
  async createEmployee (employee: BasicEmployee) {
    try {
      const response = await this.request.post("/employees", {
        ...employee
      })

      return response.data
    } catch (e) {
      Helper.processError(e)
    }
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
      Helper.processError(e);
    }
  }

  /**
   * @param {string} id - The employee id
   * @returns {JSON}  A JSON response containing the details of the user
   * @memberof FactorialHR
   */
  async getEmployee (id: number) {
    try {
      const response = await this.request.get(`/users/${id}`)

      return response.data
    } catch (e) {
      Helper.processError(e)
    }
  }
}

export default FactorialHR;
