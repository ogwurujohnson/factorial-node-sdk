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