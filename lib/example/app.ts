import express from "express";
import factorialhr from "../index";

const client =  factorialhr("V9Rpk2TB2wa__fcoitqKO-iq0Ez8J1RWzJZFBHl8FSM");

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

/**
 * Primary app routes.
 */
app.get("/", async (req, res) => {
    const employees = await client.employees.list({});
    console.log(employees);
    res.status(200).json({ message: "hola" });
});

export default app;
