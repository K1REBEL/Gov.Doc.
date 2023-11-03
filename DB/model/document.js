
const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
   
   name: {type:String},
   source: {type:String},
   desc: {type:String},
   contents: {type:String},
   category: {type:String},
   conditions: {type:String},
   pre_req: {type:String},
   steps: {type:String},
   image: {type:String},
   
}, {
   timestamps: true
})

const docModel = mongoose.model('document', documentSchema)

module.exports = docModel