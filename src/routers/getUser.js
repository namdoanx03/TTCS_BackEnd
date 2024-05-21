const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const AccountModel = require("../model/AccountsModel");


router.get('/:role', (req, res) => {

    const role = req.params.role;

    // 1 : admin ,
    // 2 : Doctor,
    // 3 : patient

    if (role === '1') {
        AccountModel.find({
            role: role
        })
            .then(data => {
                res.json({
                    message: 'get admin user success',
                    errcode: 0,
                    data: data
                })
            })
            .catch(err => console.log(err))

    }
    if (role === '2') {
        AccountModel.find({
            role: role
        })
            .then(data => {
                res.json({
                    message: 'get doctor user success',
                    errcode: 0,
                    data: data
                })
            })
            .catch(err => console.log(err))

    }
    if (role === '3') {
        AccountModel.find({
            role: role
        })
            .then(data => {
                res.json({
                    message: 'get patient user success',
                    errcode: 0,
                    data: data
                })
            })
            .catch(err => console.log(err))

    }
    if (role === '4') {
        AccountModel.find({
            role: role
        })
            .then(data => {
                res.json({
                    message: 'get y tá user success',
                    errcode: 0,
                    data: data
                })
            })
            .catch(err => console.log(err))

    }
    // .select("+password")

})

router.put('/:id', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const username = req.body.username
    const phonenumber = req.body.phonenumber
    const id = req.params.id;
    const filter = { _id : id };
    const update = { 
        name : name,
        age : age,
        username : username,
        phonenumber : phonenumber 
    };

    // `doc` is the document _after_ `update` was applied because of
    // `returnOriginal: false`
    AccountModel.findOneAndUpdate(filter, update, {
        returnOriginal: false
    })
    .then( data  => res.status(200).json(data))
    .catch( err => console.log(err) )

})

router.delete('/:id', async (req, res) => {
    const _id = await req.params.id
    console.log(" id : ", _id);
    AccountModel.deleteOne({ _id: _id })
        .then(data => { console.log(data) })
        .catch(err => console.log(err))
})




module.exports = router