const mongoose = require('mongoose');
const assert = require('assert')
const db = process.env.db_url


//connect with mongo

mongoose.connect(
    db,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true,
        useFindAndModify:true

    },
    (error , link) => {

        assert.strictEqual(error, null , "DB Connection Faild")
        console.log(link);
    }
)
