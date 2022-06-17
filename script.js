const incrementQuantity = document.querySelector('[data-increment]');
const decrementQuantity = document.querySelector('[data-decrement]');
const amountQuantity = document.querySelector('[data-amount]');

const triggerModal = document.querySelector('[data-trigger-modal]')
const modal = document.querySelector('[data-modal]')
const cross = document.querySelector('[data-cross]')

const stars = document.querySelectorAll('[data-star]')

const photos = document.querySelectorAll('[data-photo]')

incrementQuantity.addEventListener('click', () => {
    amountQuantity.innerHTML = parseInt(amountQuantity.innerHTML) + 1;
})

decrementQuantity.addEventListener('click', () => {
    const amount = parseInt(amountQuantity.innerHTML);
    if (amount > 1) {
        amountQuantity.innerHTML = amount - 1;
    }
})

triggerModal.addEventListener('click', () => {
    modal.style.display = 'block';
})

cross.addEventListener('click', () => {
    modal.style.display = 'none';
    
})

stars.forEach(star => {
    star.addEventListener('click', () => {
        const index = star.dataset.star
        for (let i = 0; i < stars.length; i++) {
            stars[i].src="/assets/description/star-empty.svg"
        }
        for (let i = 0; i <= index; i++) {
            stars[i].src="/assets/description/star-filled.svg"
        }
    })
})

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photos.forEach(photo => {
            delete photo.dataset.active
        })
        photo.dataset.active = ""

        
    })
})

