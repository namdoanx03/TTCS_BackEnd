const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Dovanngoc');
const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    username: String,
    password : {
        type : String,
        select : false
    },
    avatar: String,
    name: String,
    age: Number,
    phonenumber: String,
    role: String,
    position : String
}, {

    collection: 'Account'

});


const AccountModel = mongoose.model('account', AccountSchema);
module.exports = AccountModel