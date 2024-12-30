/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport, add blur-header class
    this.scrollY >= 20 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== Search bar ===============*/
const searchMenu = document.getElementById('search-content'),
    searchToggle = document.getElementById('nav-search'),
    searchClose = document.getElementById('search-close')

/* Search show */
if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchMenu.classList.add('show-search')
    })
}

/* Search hidden */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchMenu.classList.remove('show-search')
    })
}

/*=============== Shop bar ===============*/
const shopMenu = document.getElementById('shop-content'),
    shopToggle = document.getElementById('nav-shop'),
    shopClose = document.getElementById('shop-close')

/* Search show */
if (shopToggle) {
    shopToggle.addEventListener('click', () => {
        shopMenu.classList.add('show-shop')
    })
}

/* Search hidden */
if (shopClose) {
    shopClose.addEventListener('click', () => {
        shopMenu.classList.remove('show-shop')
    })
}
/*=============== User bar ===============*/
const userMenu = document.getElementById('user-infor'),
    userToggle = document.getElementById('nav-profile'),
    userClose = document.getElementById('user-close')

/* Search show */
if (userToggle) {
    userToggle.addEventListener('click', () => {
        userMenu.classList.add('show-user')
    })
}

/* Search hidden */
if (userClose) {
    userClose.addEventListener('click', () => {
        userMenu.classList.remove('show-user')
    })
}

var swiperPopular = new Swiper(".new_arrivals_content", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true
});

var swipercustomer = new Swiper(".customer__content", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 300 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SHOW Filter ===============*/
const accordionItem = document.querySelectorAll('.filter__item');
accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.filter__header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.filter__content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
};


/*=============== User bar ===============*/
const filterMenu = document.getElementById('filter-infor'),
    filterToggle = document.getElementById('casual-filter'),
    filterClose = document.getElementById('filter-close')

/* Search show */
if (filterToggle) {
    filterToggle.addEventListener('click', () => {
        filterMenu.classList.add('show-filter')
    })
}

/* Search hidden */
if (filterClose) {
    filterClose.addEventListener('click', () => {
        filterMenu.classList.remove('show-filter')
    })
}