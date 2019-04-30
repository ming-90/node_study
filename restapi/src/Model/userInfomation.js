import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: {type:String, unique: true},
    password: {type:String},
    userName: {type:String},
    userEmail:{type:String},
    makeDate : {type:Date, default: Date.now}
})

module.exports = mongoose.model('userInfomation',userSchema);