Describe: DestinationLog();

test: will add destination log
code: function destination
new DestinationLog() = DestinationLog1
output:
DestinationLog1 = {
  this.places = {};
} 

Describe: DestinationLog.prototype.addPlace();

test: "It will add a new place object into the log."
Code: addPlace("seattle") 
output: seattle = {};

test: will have various (Location, landmarks, date visited) properties in object
code: addPlace("seattle)
output:

seattle = {
  location: seattle
  landmark:
  dateVistited:
}
