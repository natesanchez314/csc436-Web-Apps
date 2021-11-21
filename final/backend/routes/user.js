var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const privateKey = process.env.JWT_PRIVATE_KEY

router.get('/', async function(req, res, next) {
    const users = await User.find().exec()
    return res.status(200).json({"users": users})   
})

module.exports = router