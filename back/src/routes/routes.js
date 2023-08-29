const Express = require("express");
const router = Express();
const AuthController = require("../controllers/AuthController");


router.use("/private", passport.authenticate('jwt', { session: false }));
router.post("/login", AuthController.login);
router.get("/private/getDetails", AuthController.getDetails);

module.exports = router;

