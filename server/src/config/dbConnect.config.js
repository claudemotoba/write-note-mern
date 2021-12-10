const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const dbConfig = async () => {

    mongoose.connect(`mongodb://127.0.0.1:27017/db_note_talking`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Success for connect to DB'))
    .catch((e) => console.log('Connection failed to db'));

};

module.exports = dbConfig;
