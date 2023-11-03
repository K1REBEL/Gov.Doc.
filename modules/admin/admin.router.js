const router = require("express").Router();

const { addDocument, } = require("./controller/admin.controller");

router.post("/addDocument", addDocument);

module.exports = router;