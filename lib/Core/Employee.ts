import Helper from "../utils/Helper";
import { BasicEmployee } from "./_types";

// TODO: propertly type base constructor argument here using the base class (import it)
class Employee {
    base: any;
    constructor(_base: any) {
        this.base = _base;
    }

  /**
   * @param {BasicEmployee} employee - Basic Employee object
   * @returns {JSON}  A JSON response containing the details of the employee
   * @memberof FactorialHR
  */
  async createEmployee (employee: BasicEmployee) {
    try {
      const response = await this.base.request.post("/employees", {
        ...employee
      });

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }

  /**
   * @returns {JSON}  A JSON response containing the details of the user
   * @memberof FactorialHR
  */
  async getEmployees () {
    try {
      const response = await this.base.request.get("/employees");

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
      const response = await this.base.request.get(`/users/${id}`);

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }
}

export default Employee;
