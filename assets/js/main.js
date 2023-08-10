const tagButtons = document.querySelectorAll('a[href^="#"]');
for (let tagButton of tagButtons) {
    tagButton.addEventListener('click', function (e) {
        e.preventDefault();
        const id = tagButton.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};