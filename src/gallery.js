const carouselManicure = document.getElementById('carousel-manicure');
const carouselPedicure = document.getElementById('carousel-pedicure');

const galleryItems = [
  {
    container: carouselManicure,
    items: [
      {
        picture: 'public/manicure/1.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/2.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: 'public/manicure/3.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/4.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/5.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/6.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/7.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/8.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/9.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/10.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/11.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/12.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/13.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/14.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: 'public/manicure/15.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/16.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: 'public/manicure/17.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/18.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/19.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/20.avif',
        description: 'Dopełnienie żelem'
      },
      {
        picture: 'public/manicure/21.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/22.avif',
        description: 'Manicure hybrydowy'
      },
      {
        picture: 'public/manicure/23.avif',
        description: 'Manicure hybrydowy'
      }
    ]
  },
  {
    container: carouselPedicure,
    items: [
      {
        picture: 'public/pedicure/1.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/2.avif',
        description: 'Założenie klamry'
      },
      {
        picture: 'public/pedicure/3.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/4.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/5.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/6.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/7.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/8.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/9.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/10.avif',
        description: 'Założenie klamry'
      },
      {
        picture: 'public/pedicure/11.avif',
        description: 'Założenie klamry'
      },
      {
        picture: 'public/pedicure/12.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/13.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/14.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/15.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/16.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/17.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/18.avif',
        description: 'Pedicure hybrydowy'
      },
      {
        picture: 'public/pedicure/19.avif',
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
        <img class="gallery-image" src="${galleryItem.picture}" />
        <p class="gallery-image-note">${galleryItem.description}</p>
      </div>
      `;
    })
    carousel.container.innerHTML = html;
  })
}

function shuffleItems(items) {
  let currentIndex = items.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [items[currentIndex], items[randomIndex]] = [items[randomIndex], items[currentIndex]];
  }
}


export default renderGallery;