const router = require("express").Router();

const { addDocument, retrieveDoc } = require("./controller/admin.controller");

router.post("/addDocument", addDocument);
router.get("/retrieve", retrieveDoc);

module.exports = router;