import Helper from "../utils/Helper";
import { BasicEmployee, Termination } from "./_types";

// TODO: propertly type base constructor argument here using the base class (import it)
// TODO: rename methods to follow (all, create, find, update) without the Eployees suffix, do same for other utilities
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
  async createEmployee(employee: BasicEmployee) {
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
   * @returns {JSON}  A JSON response containing the list of employees
  */
  async getEmployees() {
    try {
      const response = await this.base.request.get("/employees");

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }

  /**
   * @param {number} id - The employee id
   * @returns {JSON}  A JSON response containing the details of the employee
   * @memberof FactorialHR
  */
  async getEmployee(id: number) {
    try {
      const response = await this.base.request.get(`/employees/${id}`);

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }

  /**
   * @param {number} id - employee id
   * @param {BasicEmployee} employee - Basic Employee object
   * @returns {JSON}  A JSON response containing the new details of the employee
   * @memberof FactorialHR
  */
  async updateEmployee(id: number, employee: BasicEmployee) {
    try {
      const response = await this.base.request.put(`/employees/${id}`, {
        ...employee
      });

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }

  /**
   * @param {number} id - employee id
   * @param {Termination} termination - Termination Details {date, reason}
   * @returns {JSON}  A JSON response containing the details of the terminated employee
   * @memberof FactorialHR
  */
  async terminateEmployee(id: number, termination: Termination) {
    try {
      const response = await this.base.request.post(`/employees/${id}/terminate`, {
        ...termination
      });

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }

  /**
   * @param {number} id - employee id
   * @returns {JSON}  A JSON response containing the new details of the unterminated employee
   * @memberof FactorialHR
  */
  async unterminateEmployee(id: number) {
    try {
      const response = await this.base.request.post(`/employees/${id}/unterminate`, {});
      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }
}

export default Employee;
