import mongoose from 'mongoose'
const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogId : { type : String, unique : true },
    blogAddr : { type : String },
    visitorToday : { type : String },
    visitorTotal : { type : String },
    makeDate : { type : Date  },
    updateDate: { type : Date },
    searchString : { type : String },
    searchPage: { type : String },
    sendYN: { type : String },
    lastDate: { type : Date },
    contentsNote: { type : String }
})

module.exports = mongoose.model('blogInformation',blogSchema);