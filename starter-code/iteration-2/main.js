"use strict";
exports.__esModule = true;
// 1. Create a class Todo that implements the Interface created before.
var Todo = /** @class */ (function () {
    function Todo(myArray) {
        this.myArray = myArray;
    }
    Todo.prototype.addTask = function (task) {
    };
    ;
    Todo.prototype.listAllTasks = function () {
        myArray.forEach(function (task) {
            console.log(task);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var i = myArray.indexOf(task);
        if (i != -1) {
            myArray.splice(i, 1);
            console.log(task, "Has Been Deleted");
            console.log(myArray.length);
            return myArray.length;
        }
    };
    return Todo;
}());
// Execution
var myTodos = new Todo(myArray);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
