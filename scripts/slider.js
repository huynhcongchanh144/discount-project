const renderSlider = (element ,  perView  = 2, perViewDesktop  = 3, perViewTablet = 2, perViewMobile = 1, gap = 8 , type = 'carousel', autoplay = 3800 ) => {
    const config = {
        type,
        startAt: 0,
        perView,
        gap,
        autoplay,
        breakpoints: {
          1280: {
            perView: perViewDesktop,
          },
          1024: {
            perView: perViewTablet,
          },
          768: {
            perView: perViewMobile,
          }
        }
      }
    new Glide(element, config).mount()
}