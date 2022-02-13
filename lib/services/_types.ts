export interface BasicEmployee {
    email: string,
    first_name: string,
    last_name: string,
    birthday_on?: Date,
    start_date?: Date,
    regular_access_starts_on?: Date,
    manager_id?: string,
    role?: string,
    timeoff_manager_id?: string,
    terminated_on?: Date,
    termination_reason?: string
}

export interface Termination {
    terminated_on: Date,
    termination_reason: string
}

export interface Webhook {
    type: string
    target_url: string
}

type JsonField = boolean | number | string | null;

export interface JsonMap {
  [key: string]: JsonField | JsonMap | JsonArray;
}

export type JsonArray = Array<JsonField>

export interface APIResponse {
  __response__: object;
}

export enum EmployeeSortDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum EmployeeSortField {
  FirstName = "first_name",
  LastName = "last_name",
  TeamId = "team_id",
}