let events = [
  { name: "Music Fest", category: "music" },
  { name: "Coding Bootcamp", category: "education" }
];

events.push({ name: "Jazz Night", category: "music" });

const musicEvents = events.filter(e => e.category === "music");

const cards = events.map(e => Event: ${e.name});
console.log(cards);