import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: String,
    password: String,
    userName: String
})

module.exports = mongoose.model('user1',userSchema);