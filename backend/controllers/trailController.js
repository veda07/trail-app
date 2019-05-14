const express = require('express');
const router = express.Router();
const Trails = require('../models/trails');

router.get('/', async (req , res) => {
    try {
        console.log(req.body)
        const allTrails = await Trails.find();
        res.json({
            status:200,
            data: allTrails
        })
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})
 // tested on postman 
module.exports = router;