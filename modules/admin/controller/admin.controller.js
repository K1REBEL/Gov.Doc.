const docModel = require("../../../DB/model/document");
const placeModel = require("../../../DB/model/place");


const addDocument = async (req, res) => {
   const { name, category, desc, contents, source, pre_req, conditions, steps } = req.body;
   const foundDoc = await docModel.findOne({ name });
   if(foundDoc){ res.status(400).json({ message: "Document already exists.", foundDoc }) }
   else{
      const document = new docModel({ name, category, desc, contents, source, pre_req, conditions, steps })
      const savedDoc = await document.save();
      res.json({ message: "Document added!", savedDoc });
   }
};

const retrieveDoc = async (req, res) => {
   const name = req.body.name;
   const foundDoc = await docModel.findOne({ name });
   if(!foundDoc){ res.status(400).json({ message: "Document not found."}) }
   else{
      res.json({ message: "Here you go!", foundDoc});
   }
};

const editDoc = async (req, res) => {
   const name = req.body.name;
   try {
      const { desc, category, contents, source, pre_req, conditions, steps } = req.body;
      const updatedDoc = await docModel.findOneAndUpdate({name}, { desc, category, contents, source, pre_req, conditions, steps });
      res.json({message: "Updated", updatedDoc});
   } catch (error) {
      res.json(error.message);
   }
};

const retrieveCat = async (req, res) => {
   try {
      const targetCat = req.params.targetCat;
      // const targetCat = req.body;
      // console.log(req.params);
      const Docs = await docModel.find({ category: { $regex: targetCat } });
      if(!Docs) { res.json({message: "Invalid category or Category has no documents."})}
      else{
         res.json({message: "Documents found: ", Docs});
      }
   } catch (error) {
      res.json(error.message);
   }
};

const addPlace = async (req, res) => {
   const { name, address, g_location } = req.body;
   const place = new placeModel({ name, address, g_location });
   const savedPlace = await place.save();
   res.json({message: "Place saved.", savedPlace});
};


module.exports = {
   addDocument,
   retrieveDoc,
   editDoc,
   retrieveCat,
   addPlace,
   
}