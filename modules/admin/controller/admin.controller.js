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
}


module.exports = {
   addDocument,

}