const authRouter = Request("express").Router();
const { register, login } = require("../controllers/auth.controllers.js");

authRouter.post("/register", register);
authRouter.get("/login", login);

module.exports = authRouter;