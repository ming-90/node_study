import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: {type:String, unique: true},
    userPwd: {type:String},
    userName: {type:String},
    userEmail:{type:String},
    makeDate : {type:Date, default: Date.now},
    upDate : {type:Date, default: Date.now}
})

module.exports = mongoose.model('userInfomation',userSchema);