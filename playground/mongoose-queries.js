const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5aa3533001f703bc3a503c091';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID: ', todo);
// }).catch((e) => console.log(e));

// User.findById

User.findById('5aa09f02e91aeeff6bd8ca34').then((user) => {
    if (!user) {
        return console.log('User ID not found');
    }
    console.log('User ID ', user);
}).catch((e) => console.log(e));
