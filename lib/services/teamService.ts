import { Api } from "../api/api";
import Helper from "../utils/Helper";

export class TeamService {
  private api: Api;
  
  constructor(api: Api) {
    this.api = api;
  }

  /**
   * @returns {JSON}  A JSON response containing the details of the teams
   * @memberof FactorialHR
  */
  // async getTeams () {
  //   try {
  //     const response = await this.base.request.get("/core/teams");

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {number} id - Team id
   * @returns {JSON}  A JSON response containing the details of the team
   * @memberof FactorialHR
  */
  // async getTeam (id: number) {
  //   try {
  //     const response = await this.base.request.get(`/core/teams/${id}`);

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {string} name - Team name
   * @returns {JSON}  A JSON response containing the newly created team
   * @memberof FactorialHR
  */
  // async createTeam(name: string) {
  //   try {
  //     const response = await this.base.request.post(`/core/teams`, {
  //       name
  //     });

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {string} name - Team name
   * @param {number} id - Team id
   * @returns {JSON}  A JSON response containing the updated team
   * @memberof FactorialHR
  */
  // async updateTeam(name: string, id: number) {
  //   try {
  //     const response = await this.base.request.put(`/core/teams/${id}`, {
  //       name
  //     });

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }

  /**
   * @param {number} id - Team id
   * @memberof FactorialHR
  */
  // async deleteTeam(id: number) {
  //   try {
  //     const response = await this.base.request.delete(`/core/teams/${id}`);

  //     return response.data;
  //   } catch (e) {
  //     Helper.processError(e);
  //   }
  // }
}
