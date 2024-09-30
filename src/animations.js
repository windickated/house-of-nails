function animation() {
  const header = document.querySelector('.header');
  const salon = document.querySelector('.salon-description')
  const salonPicture = document.querySelector('.salon');
  const booksyButton = document.querySelector('.booksy-anchor');
  const googleButton = document.querySelector('.google-anchor');
  const palettePicture = document.querySelector('.color-palette-picture');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.style.visibility = 'visible';
      }
    })
  })

  if(window.outerWidth <= 600) {
    setTimeout(() => {
      header.style.backgroundImage = 'radial-gradient(var(--clr-bg-primary), var(--clr-primary))';
      header.style.height = '4em';
      salon.style.opacity = '1';
      salonPicture.style.margin = '0.75em';
      salonPicture.style.opacity = '1'; 
    }, 1000)
  } else {
    observer.observe(palettePicture)
    observer.observe(booksyButton)
    observer.observe(googleButton)
  }
}

export default animation;