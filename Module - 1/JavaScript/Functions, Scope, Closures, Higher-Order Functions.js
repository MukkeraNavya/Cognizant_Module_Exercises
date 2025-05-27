function addEvent(name, date, category) {
  return { name, date, category };
}

function registerUser(eventName) {
  console.log(User registered for ${eventName});
}

function filterEventsByCategory(events, category) {
  return events.filter(event => event.category === category);
}

// Closure for tracking total registrations
function createCategoryTracker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const musicTracker = createCategoryTracker();
console.log(musicTracker()); // 1
console.log(musicTracker()); // 2