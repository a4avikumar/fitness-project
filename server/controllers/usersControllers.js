const mongoose = require('mongoose');
const User = require('../models/userModel');    


export const makeNewUser = async (req, res) => {
    const {email, password, fullname} = req.body

    console.log({email, password, fullname})

    res.status(200).json({msg: "Success"})
}