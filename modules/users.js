const mn = require('mongoose');
const scm = mn.Schema;

const patschm = new scm(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
        
    }
);

const User = mn.model('User',patschm);
module.exports = User;