require('dotenv').config();
const express = require("express");
const connect = require("./DB/connection");
const app = express();
app.use(express.json());
connect();
const port = 9000;

app.get("/", (req, res) => res.send("Hello Gov.Doc."));
app.listen(port, "0.0.0.0", () => 
   console.log("Server is running on port " + port)
);