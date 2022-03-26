import { Api } from "../api/api.js";
import * as Types from "./_types.js";

interface EmployeeListRequest {
  after?: string;
  before?: string;
  limit?: string;
  sort_direction?: Types.EmployeeSortDirection;
  sort_field?: Types.EmployeeSortField;
}

interface EmployeesListResponse extends Types.APIResponse {
  data: Types.BasicEmployee[];
}

interface EmployeeResponse extends Types.APIResponse {
  data: Types.BasicEmployee;
}

export class EmployeeService {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  // TODO: Ask if there is a reason why names are randomly generated
  async create(
    requestParameters: Types.BasicEmployee,
    customHeaders: Types.JsonMap = {}
  ): Promise<EmployeeResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/employees",
      method: "post",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: EmployeeResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async list(
    requestParameters: EmployeeListRequest
  ): Promise<EmployeesListResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/employees",
      method: "get",
      urlParameters,
      requestParameters,
    };

    const response = await this.api.request(requestParams);

    return response;
  }

  async find(identity: string): Promise<EmployeeResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/employees/:id",
      method: "get",
      urlParameters,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: EmployeeResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async update(
    identity: string,
    requestParameters: Types.BasicEmployee,
    customHeaders: Types.JsonMap = {}
  ): Promise<EmployeeResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/employees/:id",
      method: "put",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: EmployeeResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async terminate(
    identity: string,
    requestParameters: Types.Termination,
    customHeaders: Types.JsonMap = {}
  ): Promise<EmployeeResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/employees/:id/terminate",
      method: "post",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: EmployeeResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async unterminate(identity: string): Promise<EmployeeResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/employees/:id/unterminate",
      method: "post",
      urlParameters,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: EmployeeResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }
}
