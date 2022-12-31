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