const router = require("./router");

router.use("/account", require('./signInAndOut'));
router.use("/account", require('./signUp'));
router.use("/producer", require('./producer'));
router.use("/product", require('./product')); 

module.exports = router;
