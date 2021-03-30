const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title : {type:String},
    date : {type:String},
    description : {type:String},
    text : {type:String}
})

module.exports = mongoose.model('Blog', blogSchema)