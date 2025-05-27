const eventName = "Art Workshop";
const eventDate = "2025-06-15";
let availableSeats = 20;

console.log(Event: ${eventName} on ${eventDate}, Seats left: ${availableSeats});

availableSeats--; // Decrease by 1 on registration
console.log(Seats after registration: ${availableSeats});