
/* Connections and Routes :-   */

const { response } = require("express");
const express = require("express");

// Getting Handle of the Schema :- 
const dbschema = require("../Userinfo Project/userinfoschema")

// Bascially for Routing Purpose.
const router = express.Router();

// We are using async request because it will not block the process.
router.get('/',async(request,response)=>{
    try{

        const data = await dbschema.find()
        response.json(data)

    }catch(err){
        response.send("Error" + err)
    }
})


router.get('/:id',async(request,response)=>{
    try{

        const newdata = await dbschema.findById(request.params.id)
        response.json(newdata)

    }catch(err){
        response.send("Error" + err)
    }
})

router.post('/',async(request,response)=>{

    const info = new dbschema({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        contact: request.body.contact
    })

    try{

        const a1 = await info.save()
        response.json(a1)

    }catch(err){
        response.send("Error")
    }
});


router.patch('/:id',async(request,response)=>{
    try{
        const alien = await dbschema.findById(request.params.id)
        alien.sub = request.body.sub
        const c1 = await alien.save()
        console.log("Updated");
        response.json(c1)
    }catch(err){
        response.send("Error" + err)
    }
})


router.delete('/:id',async(request,response)=>{
    try{
        const alien = await dbschema.findById(request.params.id)
        alien.sub = request.body.sub
        const c1 = await alien.remove()
        response.json(c1)
    }catch(err){
        response.send("Error" + err)
    }
})



// Exporting Router Module :- we are exporting router module because it can be accessible in the userinfo.js
module.exports = router

