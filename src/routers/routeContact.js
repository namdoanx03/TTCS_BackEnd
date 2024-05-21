
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const ContactModel = require("../model/ContactModel");

router.post('/', (req, res) => {

    const fullname = req.body.fullname;
    const phone = req.body.phone;
    const text = req.body.text;
    ContactModel.create({
        fullname: fullname,
        phone: phone,
        text: text,

    })
        .then(data => {
            res.json({
                message: 'create contact success',
                errcode: 0,
                commentDetail: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('error from server');
        })

})

router.get('/', (req, res) => {

    ContactModel.find({})
        .then(data => {
            res.json({
                message: 'get contact success',
                data: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('error from server');
        })
})

router.delete('/:id', (req, res) => {

    const id = req.params.id

    ContactModel.deleteOne({ _id: id })
        .then(data => console.log(data))
        .catch(err => console.log(err))

})
module.exports = router