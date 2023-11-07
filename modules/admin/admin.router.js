const router = require("express").Router();

const { addDocument, retrieveDoc, retrieveCat } = require("./controller/admin.controller");
const  validationFun  = require("../../middleware/validation")
const  { auth }  = require("../../middleware/auth")

router.post("/addDocument", addDocument);
router.get("/retrieve", retrieveDoc);
router.get("/Cat/:targetCat", retrieveCat);

module.exports = router;