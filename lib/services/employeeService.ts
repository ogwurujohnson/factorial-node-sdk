import { Api } from "../api/api.js";
import * as Types from "./_types.js";

interface EmployeesListRequest {
  after?: string;
  before?: string;
  limit?: string;
  sort_direction?: Types.EmployeeSortDirection;
  sort_field?: Types.EmployeeSortField;
}

interface EmployeesListResponse extends Types.APIResponse {
  data: Types.BasicEmployee[];
}

export class EmployeeService {
  private api: Api;

  constructor(api: Api) {
      this.api = api;
  }


  async create(requestParameters: Types.BasicEmployee, customHeaders: Types.JsonMap = {}) {
    const urlParameters: any = [];
    const requestParams = {
      path: "/api/v1/employees",
      method: "post",
      urlParameters,
      requestParameters,
      customHeaders,
    };
    const response = await this.api.request(requestParams);
    console.log(response);
  }


  async list(requestParameters: EmployeesListRequest): Promise<EmployeesListResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/api/v1/employees",
      method: "get",
      urlParameters,
      requestParameters,
      payloadKey: "employee_list",
    };

    const response = await this.api.request(requestParams);
    return response
  }

  /**
   * @param {number} id - The employee id
   * @returns {JSON}  A JSON response containing the details of the employee
   * @memberof FactorialHR
  */
  // async getEmployee(id: number) {
  //   try {
  //     const response = await this.base.request.get(`/employees/${id}`);

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {number} id - employee id
   * @param {BasicEmployee} employee - Basic Employee object
   * @returns {JSON}  A JSON response containing the new details of the employee
   * @memberof FactorialHR
  */
  // async updateEmployee(id: number, employee: Types.BasicEmployee) {
  //   try {
  //     const response = await this.base.request.put(`/employees/${id}`, {
  //       ...employee
  //     });

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {number} id - employee id
   * @param {Termination} termination - Termination Details {date, reason}
   * @returns {JSON}  A JSON response containing the details of the terminated employee
   * @memberof FactorialHR
  */
  // async terminateEmployee(id: number, termination: Termination) {
  //   try {
  //     const response = await this.base.request.post(`/employees/${id}/terminate`, {
  //       ...termination
  //     });

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {number} id - employee id
   * @returns {JSON}  A JSON response containing the new details of the unterminated employee
   * @memberof FactorialHR
  */
  // async unterminateEmployee(id: number) {
  //   try {
  //     const response = await this.base.request.post(`/employees/${id}/unterminate`, {});
  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }
}
