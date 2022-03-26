import factorialhr from "../index.js";

const client =  factorialhr("2dJvAkEv_--F2p7TsJ11lVA9P-4VPweekoV2Esmja-k");

const testing = async () => {
    // const all = await client.employees.list({})
    // console.log(all)
    // const employees = await client.employees.create({
    //   "email": "abiodun@gmail.com",
    //   "first_name": "Abiodun",
    //   "last_name": "Adam",
    //   "birthday_on": new Date('04 Dec 1995 00:12:00 GMT'),
    //   "start_date": new Date(),
    //   "regular_access_starts_on": new Date(),
    // });
    // console.log(employees);
    // const employee = await client.employees.find('691982')
    // console.log(employee)
    // const updatedEmployee = await client.employees.update('691982', { "first_name": "Jay" })
    // console.log(updatedEmployee)
    // const terminatedEmployee = await client.employees.terminate('691984', {
    //   terminated_on: new Date(),
    //   termination_reason: "no reason"
    // })
    // console.log(terminatedEmployee)
    const unTerminatedEmployee = await client.employees.unterminate('691984')
    console.log(unTerminatedEmployee)
};

testing();
