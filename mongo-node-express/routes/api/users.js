const express = require('express')
const router = express.Router()
const User = require('../../models/User')

//CRUD Functionality

//adding user (register)
router.post("/register", (req, res)=>{
    const {name, email, password} = req.body;
    
    if(!name || !email || !password){
        return res.status(400).send('Please enter all fields')
    }

    User.findOne({email: email}).then(async (user)=>{
        if(user){
            return res.status(400).send({error: 'User already exists'})
        }

        else{
            const newUser = new User({
                name,
                email,
                password
            })
           await newUser.save();
           res.status(200).send({successful: 'Sucessfully registered'})
        }
    })
})


//reading user (login)
router.post("/login", (req, res)=>{
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).send('Please enter all fields')
    }

    User.findOne({ email }).then((user)=>{
        if(!user){
            return res.status(400).send('User does not exist')
        }

        if (user.password !== password){
            return res.status(400).send('Invalid credentials')
        }

        //saving user in the session
        const userSession = {
            id: user._id,
            name: user.name
        }

        req.session.user = userSession;
        req.session.save();
        res.status(200).send(`${userSession.name} has successfully logged in to the application`)
    })
})


//editing user 
router.post("/edit", async (req, res)=>{
    const {email, name, password} = req.body;
    const updatedUser = {
        email,
        name,
        password
    }

    await User.findByIdAndUpdate(req.session.user.id, updatedUser, {new: true})
    .catch((err)=>{
        res.status(400).send({error: err})
    })
    res.status(200).send({successful: 'Sucessfully updated user'})
})


//authenticating user
router.get("/auth", (req, res)=>{
    const userSession = req.session.user;
    //console.log(userSession)
    if (userSession){
        res.send(userSession);
    }

    else{
        res.status(401).send('Unauthorized')
    }
})

//deleting user
router.delete("/delete", async (req, res)=>{
    await User.findByIdAndDelete(req.session.user.id)
    res.status(200).send('User successfully deleted')    
})

//logging user out and destroying session
router.delete("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        res.clearCookie("session-id")
        res.send("Logged out successfully")
    })
})


module.exports = router;


