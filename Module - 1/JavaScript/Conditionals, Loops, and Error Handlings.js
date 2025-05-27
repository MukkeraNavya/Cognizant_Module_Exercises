const events = [
  { name: "Yoga Class", date: "2025-06-10", seats: 5 },
  { name: "Music Night", date: "2024-01-01", seats: 0 },
];

const today = new Date("2025-06-01");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(Upcoming: ${event.name});
  } else {
    console.log(Skipping past or full event: ${event.name});
  }
});

function register(seats) {
  try {
    if (seats <= 0) throw new Error("No seats available");
    console.log("Registered successfully!");
  } catch (err) {
    console.error("Registration failed:", err.message);
  }
}

register(0);