import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.handleUser);

  router.post("/users/create-user", homeController.handleCreateNewUser);

  router.get("/about", (req, res) => {
    return res.send("I'm bb");
  });

  return app.use("/", router);
};

export default initWebRoutes;
