function animation() {
  const header = document.querySelector('.header');
  const salon = document.querySelector('.salon-description')
  const salonPicture = document.querySelector('.salon');
  const hiddenElements = document.querySelectorAll('.hidden');
  const employees = document.querySelectorAll('.employee');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
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
      employees.forEach((employee) => {
        employee.classList.remove('hidden');
        employee.classList.remove('scale-down');
      })
    }, 1000)
  } 

  hiddenElements.forEach((element) => observer.observe(element));
}

export default animation;