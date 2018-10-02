const db = require('../data');

module.exports = function(app){
    app.get('/api/todoList',function(req,res){
        db.TodoList.find({})
        .then(function(todolist){
            res.json(todolist);
        })
        .catch(function(err){
            res.json(err);
        })
    });

    app.post('/api/todoList',function(req,res){
        db.TodoList.create(req.body)
        .then(function(todolist){
            res.json(todolist);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    app.put('/api/todoList',function(req,res){
        db.TodoList.findOneAndUpdate({_id: req.body._id}, {$set:{todoList: req.body.todoList}})
        .then(function(todolist){
            res.json(todolist);
        })
        .catch(function(err){
            res.json(err);
        })
    })
    app.delete('/api/todoList',function(req,res){
        db.TodoList.findOneAndDelete(req.body)
        .then(function(todolist){
            res.json(todolist);
        })
        .catch(function(err){
            res.json(err);
        })
    })
}