import express from "express";
import homecontroller  from "../controllers/homecontroller";
let router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', homecontroller.getHomepage);

    router.get('/about', (req, res) => {
        return res.send("I'm killerofweb");
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;