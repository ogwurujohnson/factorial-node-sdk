import Base from "./FactorialBase";
import Employee from "./Core/Employee";
import Team from "./Core/Team";

class FactorialHR {
  base: any;
  Employee: Employee;
  Team: Team;

  /**
   *This is a constructor for creating a FactorialHR Instance
   * @param {string} token - FactorialHR token
   * @returns { FactorialHR } - An instance of FactorialHR
   */
  constructor(token: string) {
    this.base = new Base(token);
    this.Employee = new Employee(this.base);
    this.Team = new Team(this.base);
  }
}

export default FactorialHR;
