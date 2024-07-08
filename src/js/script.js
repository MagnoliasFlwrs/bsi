// menu

const menuModal = document.querySelector('.menu-modal');
const overlay = document.querySelector('.overlay');
const closeMenuBtn = document.querySelector('.menu-modal .close-btn');
const burgerBtn = document.querySelector('.burger-btn');

const showMenuModal = () => {
    overlay.classList.add('open');
    menuModal.classList.add('active');
}
const hideMenuModal = () => {
    overlay.classList.remove('open');
    menuModal.classList.remove('active');
}
burgerBtn?.addEventListener('click' , ()=> {
    showMenuModal()
})

closeMenuBtn?.addEventListener('click' , ()=> {
    hideMenuModal()
})
overlay?.addEventListener('click' , ()=> {
    hideMenuModal()
})


const projectsSwiper = document.querySelector('.projects-swiper');

if (projectsSwiper) {
    const swiper1 = new Swiper(projectsSwiper, {
        loop: true,
        slidesPerView:1.3,
        spaceBetween:20,
        breakpoints: {
            450: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            630: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView:2.5,
                spaceBetween: 20
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3.3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        scrollbar: {
            el: '.project-swiper-scrollbar',
            clickable: true
        },
    });
}

const showModal = (modal) => {
    overlay.classList.add('open');
    modal.classList.add('active');
}
const closeModal = (modal) => {
    overlay.addEventListener('click' , () => {
        overlay.classList.remove('open');
        modal.classList.remove('active');
    })
    const closeBtns =  modal.querySelectorAll('.close-btn');
    closeBtns?.forEach(closeBtn => {
        closeBtn.addEventListener('click' , () => {
            overlay.classList.remove('open');
            modal.classList.remove('active');
        })
    })

}

const documentsModal = document.querySelector('.documents-modal');
const newsSingleModal = document.querySelector('.news-single-modal');
const contactsModal = document.querySelector('.contacts-modal');
const showNewsSingleModalBtns = document.querySelectorAll('.news-card');
const showContactsModalBtns =  document.querySelectorAll('.show-contacts-modal');
const showDocumentsModalBtns =  document.querySelectorAll('.show-documents-modal');

showNewsSingleModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(newsSingleModal);
        closeModal(newsSingleModal);
    })
})
showContactsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(contactsModal);
        closeModal(contactsModal);
    })
})

showDocumentsModalBtns?.forEach(el=> {
    el.addEventListener('click' , (e) => {
        e.preventDefault();
        showModal(documentsModal);
        closeModal(documentsModal);
    })
})
