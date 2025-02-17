import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();
import connection from "./config/connectDB";


const app = express();
const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection
connection()

//route
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(">>> JWT Backend id running on the port = " + PORT);
});
