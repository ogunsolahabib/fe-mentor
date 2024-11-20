const allItems = document.querySelectorAll('.faq-item');

allItems.forEach((item) => {

    const inputItem = item.querySelector('.faq-item__input');

    const answerItem = item.querySelector('.faq-item__answer');


    inputItem.addEventListener('change', function (e) {
        const checked = e.target.checked;

        answerItem.style.display = checked ? "block" : "none"
    });
})

