const mainContainer = document.querySelector('.container');
const thanksContainer = document.querySelector('.thanks-container');
const submitButton = document.querySelector('.submit');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.number');

submitButton.setAttribute('disabled', 'disabled')

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})



rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
        submitButton.removeAttribute('disabled')
    })
})
