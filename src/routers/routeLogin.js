const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const AccountModel = require("../model/AccountsModel");
var jwt = require('jsonwebtoken');
router.post('/', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    AccountModel.findOne({
        username: username,
        password: password

    })
        .then(data => {
            console.log("req", req);
            console.log(data);
            if (data) {
                var token = jwt.sign({ _id: data._id }, 'mk');
                return res.json({
                    errcode: 0,
                    message: 'Đăng Nhập Thành Công',
                    token: token,
                    detailUser: {
                        name: data.name,
                        age: data.age,
                        phonenumber: data.phonenumber,
                        avatar: data.avatar,
                        role: data.role,
                        _id: data._id,
                    }
                })
                // return res.json.stringify(data)
            } else {
                return res.json(" Không tồn tại tài khoản ")
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('err from server')
        })
})

router.post('/getuserdetail', (req, res) => {
    let token = req.body.token;
    let _id = jwt.verify(token, 'mk')

    AccountModel.findOne({
        _id: _id._id
    })
        .then(data => {

            res.json({
                errcode: 0,
                dataUser: data
            })

        })
        .catch(err => console.log(err))

})


module.exports = router