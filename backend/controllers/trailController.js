const express = require('express');
const router = express.Router();
const Trail = require('../models/trail');

router.get('/', async (req, res) => {
    try {
        console.log(req.body)
        const allTrails = await Trail.find();
        res.json({
            status:200,
            data: allTrails
        });
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})
 // tested on postman 

 // Creating your own trail!
 router.post('/', async (req, res) =>{
     try{
    console.log('///NEW TRAIL////')
    console.log(req.body);
    const newTrail = await Trail.create(req.body);
    console.log('///NEW TRAIL////')
        res.json({
            status: 200,
            data: newTrail
        });

     }catch(err){
        console.log('err');
        res.send(err);
     }
 }) 
// tested on postman 

router.get('/:id', async (req, res)=>{
    try{
        const foundTrail = await Trail.findById(req.params.id);
            res.json({
                status: 200,
                data: foundTrail
            });

    }catch(err){
        console.log('err');
        res.send(err);
    }
})

// edit/ update by id 

router.put('/:id', async (req, res)=>{
    console.log("GOT HERE")
    console.log(req.body);
    try{
        const updatedTrail = await Trail.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedTrail
        })
    }catch(err){
        console.log('err');
        res.send(err)
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const deletedTrail = await Trail.findByIdAndRemove(req.params.id);
        res.json({
            status: 200,
            data: deletedTrail
        })
    }catch(err){
        console.log('err');
        res.send(err)
    }
})

module.exports = router;