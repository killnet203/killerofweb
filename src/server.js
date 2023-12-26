import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let port = process.env.PORT || 8080;
app.listen(port, () => {
    //call back
    console.log("Backend nodejs is running on the port: "+port);
});

viewEngine(app);
initWebRoutes(app);