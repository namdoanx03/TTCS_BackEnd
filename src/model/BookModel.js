const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Dovanngoc');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    typeTime: String,
    idClinic: {
        type: Schema.Types.ObjectId,
        ref: 'clinic'
    },
    iduser: {
        type: Schema.Types.ObjectId,
        ref: 'account'
    },

}, {
    collection: 'book'
});
const bookModel = mongoose.model('book', BookSchema);
module.exports = bookModel