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

let collapseBtn = document.querySelectorAll('.collapse-btn')

collapseBtn.forEach(e => {
    e.addEventListener('click', () => {
        let target = e.getAttribute("target");
        console.log(target)
    })
})

const openMenuOnMobile = () => {
  const menuMobile = document.querySelector('div.navbar-mobile-menu');

  if(!menuMobile.classList.contains('show')){
    menuMobile.classList.add('show');
  } else {
    menuMobile.classList.remove('show');
  }

  const secondary = document.querySelectorAll('div.navbar-secondary');
  secondary.forEach(function(e) {
    if (e.classList.contains('show')){
      e.classList.remove('show');
    }
  });
}

const openMenuSecondaryOnMobile = (idMenuSecondary) => {
  var menuSecondary = document.getElementById(idMenuSecondary);
  const menuMobile = document.querySelector('div.navbar-mobile-menu');
  menuMobile.classList.remove('show');
  menuSecondary.classList.add("show");
}

const addPositionFixedToHeader = () => {
  var header = document.getElementById("header");
  window.onscroll = function (e) {
      if ( scrollY > 100 ) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
  }
}

addPositionFixedToHeader();