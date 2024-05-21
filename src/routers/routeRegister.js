const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const AccountModel = require("../model/AccountsModel");
var jwt = require('jsonwebtoken');
router.post('/', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const avatar = req.body.avatar;
    const name = req.body.name;
    const age = req.body.age;
    const phonenumber = req.body.phonenumber;
    const role = req.body.role;
    AccountModel.findOne({
        username: username,
        password: password,
    })
        .then(data => {
            if (data) {
                res.json({
                    message: 'Đã Tồn Tại Tài Khoản',
                    errcode: 1
                })
            }
            else {
                AccountModel.create({
                    username: username,
                    password: password,
                    avatar: avatar,
                    name: name,
                    age: age,
                    phonenumber: phonenumber,
                    role: role,

                })
                    .then(data => {
                        console.log(data);
                        res.json({
                            message: 'create success',
                            errcode: 0
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json('err from server')
                    })
            }
        })
        .catch(err => console.log(err))

})
module.exports = router