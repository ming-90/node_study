import mongoose from 'mongoose'
const Schema = mongoose.Schema

const matchSchema = new Schema({
    
    userId : { type : String, unique : true },	
    userProfile : {
	    NICKNAME : { type : String },	
	    userAge : { type : Number },	
	    userGender : { type : String },	
	    userItroduction : { type : String },	
	    imageUrl : { type : String },	
    },
    proposeTo : {
	    likeUser: [ { type : String } ],	
	    dislikeUser : [ { type : String } ],	
	    likeCount : { type : Number },	
	    dislikeCount : { type : Number }	
    },
    proposeFrom : {
	    likeUser: [ { type : String } ],	
	    dislikeUser : [ { type : String } ],	
	    likeCount : { type : Number },	
	    dislikeCount : { type : Number }	
    },
    makeDate : { type : Date, default : Date.now }
})

module.exports = mongoose.model('matchInfomation',matchSchema);