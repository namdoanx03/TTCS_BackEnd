const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const CommentModel = require("../model/CommentModel");

router.post('/', (req, res) => {

    const star = req.body.star;
    const content = req.body.content;
    const comment_img = req.body.comment_img;
    const iduser = req.body.iduser;

    CommentModel.create({
        star: star,
        content: content,
        comment_img: comment_img,
        iduser: iduser,
    })
        .then(data => {
            res.json({
                message: 'create comment success',
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

    CommentModel.find({})
        .populate('iduser')
        .then(data => {
            res.json({
                message: 'get comment success',
                data: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json('error from server');
        })

})

router.get('/count/:star', (req, res) => {

    const star = req.params.star;
    // console.log(star);

    CommentModel.find({ 
        star : star
     })
     .then( data => {
        res.status(200).json({
            length : data.length
        })
     })
     .catch( err => console.log(err))


})
module.exports = router