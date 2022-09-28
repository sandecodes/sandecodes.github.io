const toggleMode = document.getElementById("rounded");
const html = document.querySelector("html");

toggleMode.addEventListener("click", function () {
  if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
    toggleMode.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
  } else {
    html.dataset.theme = "light";
    toggleMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
