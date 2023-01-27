const header = document.querySelector(".site-header");
header.addEventListener("mouseover", function() {
  header.classList.add("hover");
});

header.addEventListener("mouseout", function() {
  header.classList.remove("hover");
});
