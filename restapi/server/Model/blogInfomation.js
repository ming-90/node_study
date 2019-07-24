import mongoose from 'mongoose'
const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogId : { type : String, unique : true },
    blogAddr : { type : String },
    visitorToday : { type : String },
    visitorToday : { type : String },
    makeDate : { type : Date, default : Date.now },
    updateDate: { type : Date, default : Date.now },
    lastDate: { type : Date },
    searchString : { type : String },
    searchPage: { type : String }
})

module.exports = mongoose.model('blogInfomation',blogSchema);