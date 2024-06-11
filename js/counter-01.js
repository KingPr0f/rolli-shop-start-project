const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');
console.log(counter);
btnMinus.addEventListener('click', () => {
    console.log('Minus click')
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
})
btnPlus.addEventListener('click', () => {
    console.log('Plus click')
    counter.innerText = ++counter.innerText;
})
