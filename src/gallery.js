const carouselManicure = document.getElementById('carousel-manicure');
const carouselPedicure = document.getElementById('carousel-pedicure');

const galleryItems = [
  {
    container: carouselManicure,
    items: [
      {
        picture: '/manicure/1.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/2.jpg',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/3.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/4.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/5.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/6.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/7.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/8.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/9.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/10.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/11.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/12.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/13.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/14.jpg',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/15.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/16.jpg',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/17.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/18.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/19.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/20.jpg',
        description: 'Dopełnienie żelem'
      },
      {
        picture: '/manicure/21.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/22.jpg',
        description: 'Manicure hybrydowy'
      },
      {
        picture: '/manicure/23.jpg',
        description: 'Manicure hybrydowy'
      }
    ]
  },
  {
    container: carouselPedicure,
    items: [
      {
        picture: '/pedicure/1.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/2.jpg',
        description: 'Założenie klamry'
      },
      {
        picture: '/pedicure/3.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/4.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/5.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/6.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/7.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/8.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/9.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/10.jpg',
        description: 'Założenie klamry'
      },
      {
        picture: '/pedicure/11.jpg',
        description: 'Założenie klamry'
      },
      {
        picture: '/pedicure/12.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/13.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/14.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/15.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/16.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/17.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/18.jpg',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: '/pedicure/19.jpg',
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
      const pictureAVIF = galleryItem.picture.replace('jpg', 'avif');
      const pictureWEBP = galleryItem.picture.replace('jpg', 'webp');

      html += `
      <div class="picture-box">
        <picture>
          <source srcset="${pictureAVIF}" type=""image/avif" />
          <source srcset="${pictureWEBP}" type=""image/webp" />
          <img
            class="gallery-image lazy loading"
            src="https://placehold.co/600x800/000000/000000"
            data-src="${galleryItem.picture}"
            alt="Foto"
          />
        </picture>
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