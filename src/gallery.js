const carouselManicure = document.getElementById('carousel-manicure');
const carouselPedicure = document.getElementById('carousel-pedicure');

const galleryItems = [
  {
    container: carouselManicure,
    items: [
      {
        picture: '/manicure/1.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/2.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/3.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/4.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/5.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/6.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/7.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/8.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/9.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/10.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/11.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/12.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/13.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/14.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/15.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/16.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/17.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/18.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/19.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/20.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/21.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/22.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/23.avif',
        description: 'Manicure hybrydowy'
      }
    ]
  },
  {
    container: carouselPedicure,
    items: [
      {
        picture: '/pedicure/1.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/2.avif',
        description: 'Założenie klamry'
      },
      {
        picture: '/pedicure/3.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/4.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/5.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/6.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/7.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/8.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/9.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/10.avif',
        description: 'Założenie klamry'
      },
      {
        picture: '/pedicure/11.avif',
        description: 'Założenie klamry'
      },
      {
        picture: '/pedicure/12.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/13.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/14.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/15.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/16.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/17.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/18.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/19.avif',
        description: 'Pedicure hybrydowy'
      }
    ]
  }
]


function renderGallery() {
  galleryItems.forEach((carousel) => {
    let html = '';
    shuffleItems(carousel.items);
    carousel.items.forEach((galleryItem) => {
      html += `
      <div class="picture-box">
        <img
          class="gallery-image lazy loading"
          src="https://placehold.co/600x800/000000/000000"
          data-src="${galleryItem.picture}"
        />
        <p class="gallery-image-note">${galleryItem.description}</p>
      </div>
      `;
    })
    carousel.container.innerHTML = html;
  })
  lazyLoading();
}

function shuffleItems(items) {
  let currentIndex = items.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [items[currentIndex], items[randomIndex]] = [items[randomIndex], items[currentIndex]];
  }
}


function lazyLoading() {
  const lazyPics = document.querySelectorAll('.lazy');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        let foto = entry.target;
        foto.src = foto.dataset.src;
        foto.classList.remove('loading');
        foto.classList.add('loaded');
        observer.unobserve(entry.target);
      }
    })
  })

  lazyPics.forEach((foto) => {
    observer.observe(foto);
  })
}


export default renderGallery;