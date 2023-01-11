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
}
  
addPositionFixedToLeftSidebar();