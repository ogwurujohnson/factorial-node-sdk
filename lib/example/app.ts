import factorialhr from "../index.js";

const client =  factorialhr("dpRjOhUdITJ03BqS6UDvaTLg25FW2mt8hrpAdZMUPag");

const testing = async () => {
    const employees = await client.employees.create({
      "email": "test@gmail.com",
      "first_name": "Joe",
      "last_name": "JOe",
      "birthday_on": new Date(),
      "start_date": new Date(),
      "regular_access_starts_on": new Date(),
    });
    console.log(employees);
};

testing();
