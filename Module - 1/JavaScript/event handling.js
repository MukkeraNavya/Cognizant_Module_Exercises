document.querySelector("#categoryFilter").onchange = function (e) {
  console.log(Filtering by: ${e.target.value});
};

document.querySelector("#searchBox").onkeydown = function (e) {
  console.log(Typing: ${e.key});
};