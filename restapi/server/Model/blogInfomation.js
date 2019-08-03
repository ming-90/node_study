import mongoose from 'mongoose'
const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogId : { type : String, unique : true },
    blogAddr : { type : String },
    visitorToday : { type : String },
    visitorTotal : { type : String },
    makeDate : { type : Date, default : Date.now },
    updateDate: { type : Date, default : Date.now },
    searchString : { type : String },
    searchPage: { type : String },
    sendYN: { type : String },
    lastDate: { type : Date },
    contentsNote: { type : String }
})

module.exports = mongoose.model('blogInfomation',blogSchema);