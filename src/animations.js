function animation() {
  const header = document.querySelector('.header');
  const salon = document.querySelector('.salon-description')
  const salonPicture = document.querySelector('.salon');


  setTimeout(() => {
    if(window.outerWidth <= 600) {
      header.style.backgroundImage = 'radial-gradient(var(--clr-bg-primary), var(--clr-primary))';
      header.style.height = '4em';
      salon.style.opacity = '1';
      salonPicture.style.margin = '0.75em';
      salonPicture.style.opacity = '1';
    }
  }, 1000)
}

export default animation;