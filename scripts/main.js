let navDropdown = document.querySelectorAll(".dropdown");

navDropdown.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    let target = element.getAttribute("target");
    let dropdownMenu = document.getElementById(target);
    if (dropdownMenu) {
      dropdownMenu.style.visibility = "unset";
    }
  });

  element.addEventListener("mouseout", () => {
    let target = element.getAttribute("target");
    let dropdownMenu = document.getElementById(target);
    if (dropdownMenu) {
      dropdownMenu.style.visibility = "hidden";
    }
  });
});
