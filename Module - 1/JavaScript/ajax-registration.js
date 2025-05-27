document.querySelector("#regForm").onsubmit = function (e) {
  e.preventDefault();
  const { name, email } = e.target.elements;
  const data = {
    name: name.value,
    email: email.value
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(json => {
      console.log("Success:", json);
      setTimeout(() => alert("Registration successful!"), 1000);
    })
    .catch(err => console.error("Fail:", err));
};