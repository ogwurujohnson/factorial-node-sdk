import { Api } from "../api/api.js";
import * as Types from "./_types.js";

interface TeamListRequest {
  after?: string;
  before?: string;
  limit?: string;
  sort_direction?: Types.SortDirection;
  sort_field?: Types.TeamSortField;
}

interface TeamListResponse extends Types.APIResponse {
  data: Types.BasicTeam[];
}


interface TeamResponse extends Types.APIResponse {
  data: Types.BasicEmployee;
}

export class TeamService {
  private api: Api;
  
  constructor(api: Api) {
    this.api = api;
  }

  async create(
    requestParameters: Types.BasicTeam,
    customHeaders: Types.JsonMap = {}
  ): Promise<TeamResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/core/teams",
      method: "post",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: TeamResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async list(
    requestParameters: TeamListRequest
  ): Promise<TeamListResponse> {
    const urlParameters: any = [];
    const requestParams = {
      path: "/v1/core/teams",
      method: "get",
      urlParameters,
      requestParameters,
    };

    const response = await this.api.request(requestParams);

    return response;
  }

  async find(identity: string): Promise<TeamResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/core/teams/:id",
      method: "get",
      urlParameters,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: TeamResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async update(
    identity: string,
    requestParameters: Types.BasicTeam,
    customHeaders: Types.JsonMap = {}
  ): Promise<TeamResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/core/teams/:id",
      method: "put",
      urlParameters,
      requestParameters,
      customHeaders,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: TeamResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }

  async delete(identity: string): Promise<TeamResponse> {
    const urlParameters = [{ key: "id", value: identity }];
    const requestParams = {
      path: "/v1/core/teams/:id",
      method: "delete",
      urlParameters,
    };

    const response = await this.api.request(requestParams);
    const formattedResponse: TeamResponse = {
      ...response.data,
      __response__: response.__response__,
    };

    return formattedResponse;
  }
}
