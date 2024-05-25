const express = require("express");
const router = express.Router();
const controller = require("../backend/controller");




// home router
router.route("/").get(controller.home);

//adding the data
router.route("/add")
.post( controller.add);





module.exports=router;
