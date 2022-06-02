const router = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({user}, 'mysecretKey',{
        expiresIn:"30d",
    });
};

router.post('/signin', async (req,res) => {
        const user = await User.findOne({email: req.body.email});
        if(user){
            let match = await bcrypt.compare(req.body.password, user.password);
            if(match){
                res.json({
                    success:true,
                    message: "login Successfull",
                    token: generateToken(user._id),
                });
            }else{
                res.status(500).json({success: false})
            }
        }else{
            res.status(500).json({success: false})
        }
    
});

module.exports = router;
