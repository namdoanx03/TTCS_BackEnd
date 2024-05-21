const mongoose = require('mongoose');
const AccountModel = require('./AccountsModel');
mongoose.connect('mongodb://localhost/Dovanngoc');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    // iduser: String,
    star: String,
    content: String,
    comment_img: String,
    iduser: {
        type: Schema.Types.ObjectId,
        ref: 'account'
    },


}, {

    collection: 'Comment'

});
const CommentModel = mongoose.model('Comment', CommentSchema);
module.exports = CommentModel