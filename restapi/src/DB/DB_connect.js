require('dotenv').config()

import mongoose from 'mongoose'

exports.dbconnection = function() {
    mongoose.connect(process.env.MONGODB_URI)

    const db = mongoose.connection;

    db.on('error', function() {
        console.log("DB connection fail");
    })

    db.once('open', function() {
        console.log("DB connect!");
    })
}

