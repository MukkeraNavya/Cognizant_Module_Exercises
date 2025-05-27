document.querySelector("#regForm").onsubmit = function (e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  console.log(name.value, email.value, event.value);
};