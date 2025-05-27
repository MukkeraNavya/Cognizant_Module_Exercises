// Using .then()
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log("Events fetched", data))
  .catch(err => console.error("Error:", err));

// Using async/await
async function loadEvents() {
  try {
    console.log("Loading...");
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
loadEvents();