import { Api } from "./api/api.js";
import { EmployeeService } from "./services/employeeService.js";
import { TeamService } from "./services/teamService.js";
import { WebhookService } from "./services/webhookService.js";

export class FactorialHRClient {
  private _api: Api;

  private _employees: EmployeeService;
  private _teams: TeamService;
  private _webhooks: WebhookService;

  /**
   *This is a constructor for creating a FactorialHR Instance
   * @param {string} token - FactorialHR token
   * @returns { FactorialHR } - An instance of FactorialHR
   */
  constructor(token: string, options = {}) {
    this._api = new Api(token, options);

    this._employees = undefined;
    this._teams = undefined;
    this._webhooks = undefined;
  }

  get employees(): EmployeeService {
    if (!this._employees) {
      this._employees = new EmployeeService(this._api);
    }

    return this._employees;
  }

  get teams(): TeamService {
    if (!this._teams) {
      this._teams = new TeamService(this._api);
    }

    return this._teams;
  }

  get webhooks(): WebhookService {
    if (!this._webhooks) {
      this._webhooks = new WebhookService(this._api);
    }

    return this._webhooks;
  }
}

