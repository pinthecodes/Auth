const express = require("express");
const router = express.Router();

const User = require("../model/User")
const encrypt = require("mongoose-encryption")



router.get("/", (req,res)=>{
    res.render("index")
})


router.get("/register", (req,res)=>{
    res.render("register")
})
router.get("/login", (req,res)=>{
    res.render("login")
})




router.post("/register", (req,res)=>{
    console.log(req.body);

    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save()
    .then((user)=>{
        console.log(user);
        res.render("secret")
    })
})
router.post("/login", (req,res)=>{
    console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username})
    .then(found =>{
        if(found){
            if(found.password === password){

                res.render("secret",{data:found})
            }else{
                console.log("Password Mismatched");
            }
        }else{
            console.log("User doesnt exist");
        }
    })


})



module.exports = router;
