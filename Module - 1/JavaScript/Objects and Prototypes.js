function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const myEvent = new Event("Book Club", "2025-06-20", 10);
console.log(myEvent.checkAvailability());

console.log(Object.entries(myEvent));