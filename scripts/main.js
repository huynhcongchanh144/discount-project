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
        let collapse = document.getElementById(target)
        if(collapse.classList.contains('collapse')) {
            collapse.classList.remove('collapse')
            e.classList.remove('btn-view-up')
            e.classList.add('btn-view-down')
        } else {
            collapse.classList.add('collapse')
            e.classList.add('btn-view-up')
            e.classList.remove('btn-view-down')
        }
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
let moreDetails = document.querySelectorAll('.more-details')

moreDetails.forEach(e => {
    let tabs = e.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.addEventListener('click',() => {
            let target = tab.getAttribute('target')
            let content = document.getElementById(target)
            content.classList.remove('collapse')
            tab.classList.add('active')
            removeActive(e, target)
        })
    })
})

function removeActive(e, target) {
    let tabActive = e.querySelectorAll('.tab')
    tabActive.forEach(tab => {
        let subTarget = tab.getAttribute('target')
        let content = document.getElementById(subTarget)
        if(!tab.getAttribute('target').includes(target)) {
            tab.classList.remove('active')
            content.classList.add('collapse')
        }
    })
}

let storeDesc = document.querySelectorAll('a[href="#see-more"]')

storeDesc.forEach(e => {
    e.addEventListener('click', (ref) => {
        ref.preventDefault()
        let target = e.getAttribute('target')
        let content = document.getElementById(target)
        if(content.classList.contains('showshort')) {
            content.classList.remove('showshort')
        } else {
            content.classList.add('showshort')
        }
    })
})

let faqs = document.querySelectorAll('.faq-item')

faqs.forEach(e => {
    e.addEventListener('click', () => {
        let target = e.getAttribute('target')
        let content = document.getElementById(target)
        if(content.classList.contains('collapse')) {
            content.classList.remove('collapse')
            e.querySelector('.faq-question .icon-plus').classList.add('collapse')
            e.querySelector('.faq-question .icon-minus').classList.remove('collapse')
        } else {
            content.classList.add('collapse')
            e.querySelector('.faq-question .icon-plus').classList.remove('collapse')
            e.querySelector('.faq-question .icon-minus').classList.add('collapse')
        }
    })
})

let sidebarStore = document.querySelector('.sidebar-store')

if(sidebarStore) {
    let footer = document.querySelector('#footer')
    let header = document.querySelector('#header')
    let container = document.querySelector('.magazin')
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = footer.scrollHeight/2 + 30; 
        if(currentScroll + modifier > documentHeight) {
            sidebarStore.className = 'sidebar-store is-bottom'
        } else {
            if(window.scrollY < header.scrollHeight) {
                sidebarStore.className = 'sidebar-store'
            } else
                sidebarStore.className = 'sidebar-store is-fixed'
        }
    })
}

function addPositionFixedToHeader () {
  var header = document.getElementById("header");
  window.onscroll = function (e) {
      if ( scrollY > 130 ) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
  }
}

addPositionFixedToHeader();
