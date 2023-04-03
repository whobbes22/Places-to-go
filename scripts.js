//Business Logic for Destination Log
function DestinationLog() {
  this.places = {};
}

DestinationLog.prototype.addPlace = function(place){
  this.places[place.location] = place;
};

//Business Logic for Places

function Place(location,landmark,dateVisted){
  this.location = location;
  this.landmark = landmark;
  this.dateVisted = dateVisted;
}

Place.prototype.fullDescription = function()  {
  return "On " + this.dateVisted + ", we visited " + this.landmark + " in " + this.location;
};

//UI Logic


// let dest = new DestinationLog()