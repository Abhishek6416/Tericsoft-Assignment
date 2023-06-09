const express = require("express");
const ConnectionFn = require("./config/db");
const { userroute } = require("./Controllers/userController");
const cors = require("cors");
const BmiRoute = require("./Controllers/BmiController");
const app = express();


app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use("/", userroute);
app.use("/",BmiRoute);

app.get("*", (req, res) => {
  res.send("backend api is running");
});

app.listen(PORT, () => {
  try {
    ConnectionFn();
    console.log("listening PORT");
  } catch (error) {
    console.log("error");
  }
});
