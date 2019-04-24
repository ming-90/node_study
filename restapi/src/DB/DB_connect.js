require('dotenv').config()

import mongoose from 'mongoose'

//함수선언
exports.dbconnection = function() {
    //DB connect. env에 connect_uri를 선언
    mongoose.connect(process.env.MONGODB_URI)

    const db = mongoose.connection;

    //error
    db.on('error', function() {
        console.log("DB connection fail");
    })

    //connect
    db.once('open', function() {
        console.log("DB connect!");
    })
}

