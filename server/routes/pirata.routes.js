const PirataController = require("../controllers/pirata.controller");
const UserController = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/piratas", authenticate, PirataController.create_pirata);

    app.get("/api/piratas", authenticate, PirataController.get_all);

    app.get("/api/piratas/:id", authenticate, PirataController.get_pirata);

    app.put("/api/piratas/:id", authenticate, PirataController.update_pirata);

    app.delete("/api/piratas/:id", authenticate, PirataController.delete_pirata);

    app.post("/api/register", UserController.register);

    app.post("/api/login", UserController.login);

    app.get("/api/logout", UserController.logout);
}