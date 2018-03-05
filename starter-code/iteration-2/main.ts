// Add the reference to the "TodoInterface"
import {TodoI} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoI{
  constructor(public myArray: Array<string>) { }
  addTask(task:string) {
  };
  listAllTasks(){
    myArray.forEach(function(task:string){
      console.log(task)
    })
  };

  deleteTask(task){
    var i = myArray.indexOf(task);
    if(i != -1) {
      myArray.splice(i, 1);
      console.log(task, "Has Been Deleted");
      console.log(myArray.length)
      return myArray.length;

  }
 }
}

// Execution
let myTodos = new Todo(myArray);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
