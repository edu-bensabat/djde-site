const Express = require("express");
const router = Express();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");


router.post("/user", UserController.create);
router.get("/user/:id", UserController.show);
router.get("/user", UserController.index);
router.delete("/user/:id", UserController.destroy);
router.put('/user/:id', UserController.update);
router.put('/private/user',  UserController.authUpdate);


router.use("/private", passport.authenticate('jwt', { session: false }));
router.post("/login", AuthController.login);
router.get("/private/getDetails", AuthController.getDetails);

module.exports = router;

