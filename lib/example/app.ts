import express from "express";
import FactorialHR from "../FactorialHR";

const opee = new FactorialHR("c_PxeWR9bsUqi2FhhAoBlpQnzTEX-bbgsBDtfQmXW6s");

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get("/", async (req, res) => {
    const employees = await opee.getEmployees();
    console.log(employees);
    res.status(200).json({ message: "hola" });
});

export default app;
