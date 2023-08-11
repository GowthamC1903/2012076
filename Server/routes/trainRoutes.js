const express = require("express");
const router = express.Router();
const {getTrain,getOneTrain} = require("../trainController")

router.route("/").get(getTrain);

router.route("/:trainNo").get(getOneTrain);

module.exports = router;
