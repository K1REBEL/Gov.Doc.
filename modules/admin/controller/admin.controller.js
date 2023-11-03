const docModel = require("../../../DB/model/document");


const addDocument = async (req, res) => {
   const { name, desc, contents, source, pre_req, conditions, steps } = req.body;
   const foundDoc = await docModel.findOne({ name });
   if(foundDoc){ res.status(400).json({ message: "Document already exists.", foundDoc }) }
   else{
      const document = new docModel({ name, desc, contents, source, pre_req, conditions, steps })
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
};


module.exports = {
   addDocument,
   retrieveDoc,
   editDoc,

}