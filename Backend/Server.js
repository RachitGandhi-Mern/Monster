const express = require("express");
const app = express();
const cookieparse = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const connectToDB = require("./src/DB/db");
connectToDB();

const authRoute = require("./Routes/authRoutes");

app.use(express.json());

app.use(cors({ origin: [ "http://localhost:5173", process.env.FRONTEND_URL ], credentials: true }));
app.use(cookieparse());
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
