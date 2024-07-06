// ENV Variables
require("dotenv").config();

import express from "express";
import config from "config";
//Routers
import router from "./router";
//DB
import db from "../config/db"
//Logger
import Logger from "../config/logger"
//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

const port = config.get<number>("port");

const app = express();

//JSON middleware
app.use(express.json());

app.use(morganMiddleware);
//Routes
app.use("/api/", router);

//app port

app.listen(port, async ()=> {
    await db();
    Logger.info(`Aplicação está funcionando na porta: ${port}`);
});
