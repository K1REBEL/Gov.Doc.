
const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
   
   name: {type:String},
   address: {type:String},
   g_location: {type:String},
   docs: [{type: mongoose.Schema.Types.ObjectId, ref: "document"}],
   work_hours: {type:String},
   phone_no: {type:String},
   has_parking: {type:Boolean},

}, {
   timestamps: true
})

const placeModel = mongoose.model('place', sourceSchema)

module.exports = placeModel