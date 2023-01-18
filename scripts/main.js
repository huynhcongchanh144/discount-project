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
            e.textContent = 'See less »'
        } else {
            content.classList.add('showshort')
            e.textContent = 'See more »'
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


// POPUP

function createModal(id) {
    let body = document.querySelector("body")
    let content = document.querySelector(`#${id}`)
    let img = content.querySelector(".imgwrap img")
    img = img ? img.getAttribute('src') : document.querySelector('.title img').getAttribute('src')
    let title = content.querySelector('.title-voucher').textContent
    let code = content.querySelector(".code .btn-getcode").getAttribute('code')
    body.innerHTML += `
        <div class="popup-container">
            <div class="popup">
                <div class="row mb-0 content">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="imgwrap">
                                <img src="${img || imgStore}" width="80" alt="">
                            </div>
                            <div class="title f-bold col-md-8">${title}
                            </div>
                        </div>
                        <div class="row mb-2">
                            <p class="tutorial">
                                Mergi la <a href="">homewish.ro</a> si introdu codul inainte de finalizarea comenzii.
                            </p>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-9 contain-code">
                                <span>${code}</span>
                            </div>
                            <div class="notify-wrapper collapse">
                                <div class="notify-arrow"></div>
                                <div class="notify-container">
                                    <div class="notify-success">
                                        <span>The code has been copied.</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 p-0 t-center">
                                <button class="btn btn-copy">
                                    Copiaza
                                </button>
                            </div>
                        </div>
                        <p class="visit my-2">
                            <a href="">Mergi la magazinul homewish.ro ></a>
                        </p>
                        <div class="rate">
                            <small>Functioneaza?</small>
                            <div class="row justify-center">
                                <button class="btn btn-thumb thumb-up">
                                    <svg class="thumb" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                                    </svg>
                                    <span>Functioneaza</span>
                                </button>
                                <button class="btn btn-thumb thumb-down">
                                    <svg class=" thumb" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                        <path
                                            d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z" />
                                    </svg>
                                    <span>Nu functioneaza</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row footer mb-0">
                    <div class="col-md-12">
                        <div class="row mb-0">
                            <input class="col-md-9" type="email" name="email" id="" placeholder="Introduceti e-mail pentru abonare la newsletter">
                            <button class="btn col-md-3">Abonare</button>
                        </div>
                    </div>
                </div>

                <button class="btn close">X</button>
            </div>
            <div class="backdrop"></div>
        </div>
    `

    let btnClose = document.querySelector('.btn.close')
    btnClose.addEventListener("click", () => {
        document.querySelector('.popup-container').remove()
    })

    let backdrop = document.querySelector('.backdrop')
    backdrop.addEventListener("click", () => {
        document.querySelector('.popup-container').remove()
    })

    document.addEventListener("keydown", (event) => {
        let popupC = document.querySelector('.popup-container')
        if(event.key == 'Escape' && popupC) {
            popupC.remove()
        }
    })

    let btnCopy = document.querySelector('.btn.btn-copy')
    btnCopy.addEventListener("click", () => {
        navigator.clipboard.writeText(code)
        let notify = document.querySelector('.notify-wrapper')
        notify.classList.remove("collapse")
        let uidInterval = setInterval(()=> {
            notify.classList.add("collapse")
            clearInterval(uidInterval)
        }, 3000)
    })
}

function createModalLogin(e, type) {
    e.preventDefault()
    let body = document.querySelector('body')
    let popupExist = document.querySelector('.popup-container')
    if(popupExist) popupExist.remove()
    
    body.innerHTML += `
            <div class="popup-container login-container">
                <div class="popup login">
                    <div class="row mb-0 content justify-center">
                        <div class="col-xs-8 t-center">
                            <h3>Inregistrează-te acum și începe să colectezi
                                <span >cashback</span> la Epantofi şi multe alte magazine.
                            </h3>
                            <img src="https://cdn.picodi.com/assets/v20/images/navbar-register-modal.9045e5b9.svg" alt="">

                            <div class="form-login justify-center">
                                <div class="social col-md-12 p-0">
                                    <button class="btn btn-login-fb w-100">
                                        <span class="icon"></span>
                                        <span>Login Facebook</span> 
                                    </button>
                                </div>
                                <div class="social col-md-12 p-0">
                                    <button class="btn btn-login-gg col-md-12">
                                        <span class="icon"></span>
                                        <span>Sign in with Google </span>
                                    </button>
                                </div>

                                <h3 class="mt-2 t-center col-md-12 py-0 f-18">Login with Email</h3>
                                <form action="" class="col-md-12 px-0">
                                    <div class="row mb-0">
                                        <input type="email" name="email" id="email" class="col-md-12 mb-7" placeholder="Email">
                                        <input type="password" name="password" id="password" class="col-md-12" placeholder="Password">
                                    </div>
                                    <small class="notify">Prin înregistrare, confirmi ca ai citit și accepti "<a href="">Termeni şi conditți</a>"si "<a href="">Politica de
                                        confidentialitate.</a>"</small>

                                    <div>
                                        <small class="notify-login"></small>
                                    </div>

                                    <div class="submit mt-2">
                                        <button class="btn btn-submit ${type == 'login' ? 'btn-login' : 'btn-signup'}" type="button">${type == 'login' ? 'Login' : 'Register'}</button>
                                    </div>
                                </form>

                                <small class="notify">${type == 'login' ? 'Nu aveți încă un cont Picodi?' : 'Ai deja un cont Picodi?'} <a href="" class="${type == 'login' ? 'redirect-register' : 'redirect-login'}">${type == 'login' ? 'Inregistreaza-te' : 'Conecteaza-te'}</a></small>
                            </div>
                        </div>
                    </div>

                    <button class="btn close">X</button>
                </div>
                <div class="backdrop"></div>
            </div>`

    var loginScript = document.createElement("script")
    loginScript.src = "../../scripts/login.js"
    loginScript.type = 'module'
    body.appendChild(loginScript)

    let btnClose = document.querySelector('.btn.close')
    btnClose.addEventListener("click", () => {
        document.querySelector('.popup-container').remove()
        body.removeChild(loginScript)
    })

    let backdrop = document.querySelector('.backdrop')
    backdrop.addEventListener("click", () => {
        document.querySelector('.popup-container').remove()
        body.removeChild(loginScript)
    })

    document.addEventListener("keydown", (event) => {
        let popupC = document.querySelector('.popup-container')
        if(event.key == 'Escape' && popupC) {
            popupC.remove()
            body.removeChild(loginScript)
        }
    })

    let redirectLogin = document.querySelector('.redirect-login')
    let redirectRegister = document.querySelector('.redirect-register')
    if(redirectLogin) {
        redirectLogin.addEventListener('click', (e) => {
            createModalLogin(e, 'login')
        })
    } else {
        redirectRegister.addEventListener('click', (e) => {
            createModalLogin(e, 'register')
        })
    }
}


// Get all sections that have an ID defined
const sections = document.querySelectorAll(".section-item[id]");
// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

let noAuthMenu = document.querySelector('.no-auth')
let authMenu = document.querySelector('.auth')

if(noAuthMenu && authMenu) {
    if(sessionStorage.getItem('userData')) {
        let userData = JSON.parse(sessionStorage.getItem('userData'))
        noAuthMenu.classList.add('collapse')
        document.querySelector('.name-account').textContent = userData.first_name && userData.last_name ?
            `${userData.first_name} ${userData.last_name}` : userData.name
    } else {
        authMenu.classList.add('collapse')
    }
}

function goToAccountPage(e) {
    e.preventDefault()
    if(sessionStorage.getItem('userData')) {
        window.location.href = '/account/profile.html'
    } else {
        createModalLogin()
    }
}

const openMenuSearch = () => {
    const menuMobile = document.querySelector('.search-bar-mobile');
  
    if(!menuMobile.classList.contains('collapse')){
      menuMobile.classList.add('collapse');
    } else {
      menuMobile.classList.remove('collapse');
    }
}

const actionFooterOnMobile = (e) => {
    let ListEl = e.querySelector('.list');
    let heightOfList = ListEl.querySelector('.list-style-none').offsetHeight;
    let icon = e.querySelector('.icon-chevron-down-solid')
    if(ListEl.classList.contains('show')) {
        ListEl.classList.remove('show');
        icon.classList.remove('show')
        ListEl.style.maxHeight = 0+'px';
    } else {
        ListEl.classList.add('show');
        icon.classList.add('show')
        ListEl.style.maxHeight = heightOfList+10+'px';
    }
}