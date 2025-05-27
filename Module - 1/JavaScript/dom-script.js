const eventList = document.querySelector("#eventList");

events.forEach(event => {
  const card = document.createElement("div");
  card.textContent = Event: ${event.name};
  eventList.appendChild(card);
});