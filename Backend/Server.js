const express = require("express");
const app = express();
const cookieparse = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const connectToDB = require("./src/DB/db");
connectToDB();

const authRoute = require("./Routes/authRoutes");

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieparse());
app.use("/api/auth", authRoute);

app.listen(3000, () => {
  console.log("Server Is Running");
});
