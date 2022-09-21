// menu btn and nav-links

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links-2');




menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');

    navLinks.classList.toggle('active');
});



// contact modal 

const workTogether = document.querySelectorAll('[data-modal-target]');
const workTogetherClose = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


workTogether.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        workOpen(modal);
    })
})

workTogetherClose.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        workClose(modal);
    })
})

function workOpen(modal) {
    if (modal == null) return 
    modal.classList.add('active');
    overlay.classList.add('active');
}

function workClose(modal) {
    if (modal == null) return 
    modal.classList.remove('active');
    overlay.classList.remove('active');
}
