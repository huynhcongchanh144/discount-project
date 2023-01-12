const toggleMenu = document.querySelector('.toggle-menu svg')
toggleMenu.addEventListener("click", () => {
    let menu = document.querySelector('.sidebar .menu')
    if(menu.classList.contains('show')) {
        menu.classList.remove('show')
    } else {
        menu.classList.add('show')
    }
})

if(!sessionStorage.getItem('userData')) {
    window.location.href = '/'
}