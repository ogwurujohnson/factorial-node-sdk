import Helper from "../utils/Helper";

class Team {
    base: any;
    constructor(_base: any) {
        this.base = _base;
    }


  /**
   * @returns {JSON}  A JSON response containing the details of the teams
   * @memberof FactorialHR
  */
  async getTeams () {
    try {
      const response = await this.base.request.get("/teams");

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }

  /**
   * @param {string} id - The team id
   * @returns {JSON}  A JSON response containing the details of the team
   * @memberof FactorialHR
  */
  async getTeam (id: number) {
    try {
      const response = await this.base.request.get(`/teams/${id}`);

      return response.data;
    } catch (e) {
      Helper.processError(e);
    }
  }
}

export default Team;
