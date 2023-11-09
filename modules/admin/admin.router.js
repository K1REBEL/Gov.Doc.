const router = require("express").Router();

const { addDocument, retrieveDoc, retrieveCat, addPlace, getPlaceData, updatePlace } = require("./controller/admin.controller");
const  validationFun  = require("../../middleware/validation")
const  { auth }  = require("../../middleware/auth")

router.post("/addDocument", addDocument);
router.get("/retrieve", retrieveDoc);
router.get("/Cat/:targetCat", retrieveCat);

router.post("/addPlace", addPlace)
router.get("/getPlace", getPlaceData)
router.patch("/updatePlace", updatePlace)

module.exports = router;