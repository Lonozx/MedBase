let hamburger = document.querySelector(".mobile_only");
let closeham = document.querySelector(".closewindow");
let sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  } else {
    sidebar.classList.add("show");
  }
});
closeham.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
  } else {
    sidebar.classList.add("show");
  }
});
