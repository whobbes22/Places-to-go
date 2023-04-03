Describe: DestinationLog();

test: "It will create a new destination log."
code: function destination
let trip = new DestinationLog();
trip;
expected output:
trip1 = {}

Describe: DestinationLog.prototype.addPlace();

test: "It will add a new place object into the log."
Code: addPlace("place1") 
output: trip1 = {
  place1 = {};
}

Describe: Places();

Test: "It will create a new place object."
Code:
let place1 = new Place("Seattle", "Space Needle", "march 2023");
Expected Output:
place1 = {
  location: Seattle
  landmark: Space Needle
  dateVisited: march 2023
}

Describe: 