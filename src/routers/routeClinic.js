const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const ClinicModel = require("../model/ClinicModel");

// name: String,
//     idDoctor: {
//         type: Schema.Types.ObjectId,
//         ref: 'account'
//     },
//     avatar: String,
//     phonenumber: String,

router.post('/', (req, res) => {

    const name = req.body.name;
    const idDoctor = req.body.idDoctor;
    const avatar = req.body.avatar;
    const phonenumber = req.body.phonenumber;

    ClinicModel.create({
        name: name,
        idDoctor: idDoctor,
        avatar: avatar,
        phonenumber: phonenumber,
    })
        .then(data => {
            res.json({
                message: 'create clinic success',
                errcode: 0,
                data: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('error from server');
        })

})

router.get('/:id', (req, res) => {
    const id = req.params.id;
   
    ClinicModel.findOne({ idDoctor : id })
        .populate('idDoctor')
        .then(data => {
            res.json({
                message: 'get clinic success',
                data: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('error from server');
        })

})


module.exports = router