const express = require("express");
const router = express.Router();
const users = require("./api/users");

/* Midlewares*/
router.use("/users", users);

/* GET api listing. */
router.get("/", function (req, res, next) {
  res.send("api");
});

module.exports = router;
