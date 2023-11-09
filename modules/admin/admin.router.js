const router = require("express").Router();

const { addDocument, retrieveDoc, retrieveCat, addPlace } = require("./controller/admin.controller");
const  validationFun  = require("../../middleware/validation")
const  { auth }  = require("../../middleware/auth")

router.post("/addDocument", addDocument);
router.get("/retrieve", retrieveDoc);
router.get("/Cat/:targetCat", retrieveCat);

router.post("/addPlace", addPlace)
router.get("/updatePlace", )

module.exports = router;