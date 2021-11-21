const mongoose = require("mongoose")

const uri = process.env.DB_URI

function connect() {
    const options = { useNewUrlParser: true }
    mongoose.connect(uri, options).then(
        () => { console.log("Connected to DB") },
        err =>{ console.log("Error connecting to DB: ", err) }
    )
}

module.exports = connect