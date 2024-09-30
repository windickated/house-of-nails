const prices = [
  {
    category: 'manicure',
    services: [
      {
        name: 'Manicure hybrydowy',
        price: 115,
        annotation: null
      },
      {
        name: 'Dopełnienie żelem',
        price: 140,
        annotation: '(długość do 2)'
      },
      {
        name: 'Manicure klasyczny',
        price: 60,
        annotation: null
      },
      {
        name: 'Zdobienia',
        price: 15,
        annotation: '(cena się różni w zależności od rodzaju zdobienia)'
      },
      {
        name: 'French',
        price: 15,
        annotation: null
      },
      {
        name: 'Naprawa paznokcia',
        price: 5,
        annotation: null
      }
    ]
  },
  {
    category: 'pedicure',
    services: [
      {
        name: 'Pedicure hybrydowy pełny',
        price: 150,
        annotation: null
      },
      {
        name: 'Pedicure hybrydowy',
        price: 130,
        annotation: '(tylko paznokcie)'
      },
      {
        name: 'Pedicure klasyczny pełny',
        price: 110,
        annotation: null
      },
      {
        name: 'Pedicure klasyczny',
        price: 70,
        annotation: '(tylko paznokcie)'
      },
      {
        name: 'Pedicure podologiczny podstawowy',
        price: 140,
        annotation: '(opracowanie paznokci i pięt oraz usunięcie pojedynczego modzela/odciska)'
      },
      {
        name: 'Pedicure podologiczny specjalistyczny',
        price: 180,
        annotation: '(podstawowy + opracowanie pękających pięt, usunięcie odcisków i modzeli)'
      },
      {
        name: 'Opracowanie wrastającego paznokcia',
        price: 170,
        annotation: '+ założenie klamry tytanowej '
      },
      {
        name: 'Założenie kolejnej (zmiana) klamry tytanowej',
        price: 70,
        annotation: null
      }
    ]
  },
  {
    category: 'elektrokoagulacja',
    services: [
      {
        name: 'Kilka niedużych zmian',
        price: 100,
        annotation: '(usunięcie punktów rubinowych, włókniaków)'
      },
      {
        name: 'Jedna duża lub więcej małych zmian',
        price: 150,
        annotation: '(usunięcie brodawek płaskich/wojotokowych)'
      },
      {
        name: 'Dłuższa praca z elektrokoagulatorem',
        price: 200,
        annotation: '(około 30 minut)'
      }
    ]
  }
]


export const priceTabs = document.querySelectorAll('.price-category');
const priceContainer = document.getElementById('prices');
const priceMap = new Map([
  ['manicure', 0],
  ['pedicure', 1],
  ['elektrokoagulacja', 2]
]);

export function deactivateTabs(category) {
  priceTabs.forEach((tab) => {
    if(tab.id != category) {
      tab.style.color = 'var(--clr-text)';
      tab.style.backgroundColor = 'var(--clr-demi-transparent)';
      tab.style.fontWeight = 'inherit';
    }
  })
}

export function renderPriceList(category) {
  let servicesArray = prices[priceMap.get(category)].services;
  let html = '';
  if(window.outerWidth <= 600) {
    html += `
      <p class="category-title-mobile">${category.charAt(0).toUpperCase() + category.slice(1)}</p>
      <hr class="category-title-mobile-divider">
    `;
  }
  for(let i in servicesArray) {
    html += `
    <div class="service-container">
      <div class="service-name-container">
        <p class="service-name">${servicesArray[i].name}</p>
    `;
    if(servicesArray[i].annotation != null) {
      html += `
        <p class="service-annotation">${servicesArray[i].annotation}</p>
      `;
    }
    html += `
      </div>
      <p class="service-price">${servicesArray[i].price}</p>
    </div>
    `;
    if(i == servicesArray.length - 1) {
      break;
    } else {
      html += '<hr class="service-divider">'
    }
  }
  html += `
  <picture>
    <source srcset="/${category}.avif" type="image/avif" />
    <img class="category-image" src="/${category}.jpg" />
  </picture>
  `;
  priceContainer.innerHTML = html;
}

export function resizePriceTabs() {
  priceTabs.forEach((tab) => {
    if(window.outerWidth <= 600) {
      tab.innerHTML = `
        <img class="category-title-image" src="/${tab.id}-category.png" alt="${tab.id}" />
      `;
    } else {
      tab.innerHTML = tab.id.charAt(0).toUpperCase() + tab.id.slice(1)
    }
  })
}