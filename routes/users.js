var express = require("express");
var multer = require("multer");

var router = express.Router();

var upload = multer({ dest: "./uploads/" });

var User = require("../models/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", function(req, res, next) {
  res.render("register", { title: "Register" });
});

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Login" });
});

router.post("users/register", upload.single("profileimage"), function(
  req,
  res,
  next
) {
  console.log(req);
});

module.exports = router;
