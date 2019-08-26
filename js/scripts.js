function List(firstName, task) {
  this.firstName = firstName;
  this.task = task;
}

var myToDo = new List("Susan", []);
var myList = new List("Micah", []);

// function Types(shopping, birthdays, friends, home, work, transportation) {
//   this.shopping =  shopping;
//   this.birthdays = birthdays;
//   this.friends = friends;
//   this.home = home;
//   this.work = work;
//   this.transportation = transportation;
// }

function Task(title, details, prioritize, status, type) {
  this.title = title;
  this.details = details
  this.prioritize = prioritize;
  this.status = status;
  this.type = type;
}

var shopping = new Task ("food", ["apples", "cookies", "carrots", "kale", "sushi", "ice cream"], "medium", "not done", "Nom Nom Nom");

//this added the entire shopping object entry into Micah's list
myList.task.push(shopping);



Task.prototype.findTask = function(title) {
  for (var i=0; i< Task.length; i++) {
    if (this.List[i]) {
      if (this.Task[i].title) == title {
        return this.Task[i];
    }
  }
};
  return false
}

Task.prototype.deleteTask
