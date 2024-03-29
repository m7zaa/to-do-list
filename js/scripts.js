function List(firstName, task) {
  this.firstName = firstName;
  this.task = task;
}

// var test = List(firstName, task);
// List.createTask(new);
// displayContactDetails(addressBook);

//creates entries
var myToDo = new List("Susan", []);
var myList = new List("Micah", []);




//A constructor to create tasks.
function createTask(name, details, prioritize, status) {
  this.name = name;
  this.details = details
  this.prioritize = prioritize;
  this.status = status;
}

//Creates a task
var grocery = new createTask ("groceryList", ["apples", "cookies", "carrots", "kale", "sushi", "ice cream"], "medium", "not done");

//this added the entire shopping object entry into Micah's list
myList.task.push(grocery);


//Creates a prototype method to find a task, searching by name
List.prototype.findTask = function(name) {
  for (var i=0; i< this.task.length; i++) {
    if (this.task[i]) {
      if (this.task[i].name == name) {
        return this.task[i];
    }
  }
};
  return false
}



//This searches "myList" for a task with the name "groceryList"
myList.findTask("groceryList");

//this prototype method updates task status to complete!
List.prototype.updateStatus = function(name) {
  for (var i=0; i<this.task.length; i++) {
    if (this.task[i]) {
      if (this.task[i].name == name) {
        this.status = "complete";
        return;
      }
    }
  };
  return false;
}


//this prototype method deletes a task by searching for name of task.
List.prototype.deleteTask = function(name) {
  for (var i=0; i<this.task.length; i++) {
    if (this.task[i]) {
      if (this.task[i].name == name) {
        delete this.task[i];
        return true;
      }
    }
  };
  return false;
}

// this method deletes the task groceryList from myList
myList.deleteTask("groceryList");











$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
  var grocery = $("input:radio[name=grocery]:checked").val();
  var social = $("input:radio[name=social]:checked").val();
  var work = $("input:radio[name=work]:checked").val();
  var school = $("input:radio[name=school]:checked").val();
  var transportation = $("input:radio[name=transportation]:checked").val();
  var name = $("#new-first-name").val();
  var newTask = $("#newTaskName").val();


  console.log(List(name, newTask));
  });
});












// function Types(shopping, birthdays, friends, home, work, transportation) {
  //   this.shopping =  shopping;
  //   this.birthdays = birthdays;
  //   this.friends = friends;
  //   this.home = home;
  //   this.work = work;
  //   this.transportation = transportation;
  // }
