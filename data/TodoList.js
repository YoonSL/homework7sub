const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    todoList:{
        type:String,
        unique: true,
        required: "This field cannot be empty!"
    }
})

var TodoList = mongoose.model('TodoList',TodoSchema);

module.exports = TodoList;