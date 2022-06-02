const router = require('express').Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');

router.post("/signup", async (req,res) => {
    const hashedpassword = await bcrypt.hash(req.body.password,10);
    const checkUserExist = await User.findOne({email:req.body.email});
    if(!checkUserExist){
        const user = new User({
            email : req.body.email,
            password : hashedpassword,
            watchlist: [],
        });
        let result = await user.save();
        res.status(200).json(result);
    }else{
        res.status(500).json({success:false});
    }

});

module.exports = router;
