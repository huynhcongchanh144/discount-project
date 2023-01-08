const config = {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    gap: 8,
    autoplay: 3500,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide', config).mount()

function addPositionFixedToLeftSidebar () {
  var sidebar = document.querySelector("div.sidebar-inner");
  var header = document.getElementById("header");
  var footer = document.getElementById("footer");
  var bodyContent = document.querySelector("div.body-content")
  window.onscroll = function (e) {
      if ( scrollY > 130 ) {
        sidebar.classList.add("fixed");
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }

      if (scrollY >=  ( bodyContent.offsetHeight + header.offsetHeight  - ( footer.offsetHeight + 200 ) ) ) {
        sidebar.classList.remove("fixed");
      } else {
        sidebar.classList.add("fixed");
      }
  }
}
  
addPositionFixedToLeftSidebar();