require('dotenv').config();
const express = require("express");
const connect = require("./DB/connection");
const app = express();
const allRoutes = require("./modules/index.router");
app.use(express.json());
connect();
const port = process.env.PORT;

app.get("/", (req, res) => res.send("Hello Gov.Doc."));
app.use("/v1/admin", allRoutes.adminRouter);

app.listen(port, "0.0.0.0", () => 
   console.log("Server is running on port " + port)
);