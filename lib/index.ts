import { FactorialHRClient } from "./client";

const initialiser = function(token: string, options = {}) {
  return new FactorialHRClient(token, options);
};

export default initialiser;