var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/data", (req, res) => {
  res.status(200).json([
    { name: "Carlos", age: 40 },
    { name: "Pedro", age: 60 },
  ]);
});

module.exports = router;
