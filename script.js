



const toggleButtons = document.querySelectorAll('.toggle-answer');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const answer = this.closest('.faq-item').querySelector('.answer');

        answer.classList.toggle('show');

        if (answer.classList.contains('show')) {
            this.src = './img/close-logo.svg';
        } else {
            this.src = './img/add-logo.svg';
        }
    });
});




document.querySelectorAll('.toggle-answer').forEach((toggle) => {
    toggle.addEventListener('click', function () {
        const faqItem = this.closest('.faq-item');
        faqItem.classList.toggle('active');
        this.classList.toggle('open');
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//     const duplicateButton = document.getElementById('duplicate-button');
//     const newsItemsContainer = document.getElementById('news-items');

//     duplicateButton.addEventListener('click', () => {
//         for (let i = 0; i < 6; i++) { // Дублируем 6 раз
//             const clonedItem = newsItemsContainer.firstElementChild.cloneNode(true);
//             newsItemsContainer.appendChild(clonedItem);
//         }
//     });
// });


function toggleMenu() {
    const navContainer = document.getElementById("nav-container");
    navContainer.classList.toggle("active");
}


// document.addEventListener('DOMContentLoaded', function () {
//     // Toggle for "Batafsil" button
//     const detailsBtn = document.getElementById('detailsBtn');
//     const extraInfo = document.getElementById('extraInfo');
//     detailsBtn.addEventListener('click', function () {
//         extraInfo.classList.toggle('hidden');
//     });

// });
// const toggleTitles = document.querySelectorAll('.toggle-title');
// toggleTitles.forEach(title => {
//     title.addEventListener('click', function () {
//         const description = this.nextElementSibling; // Get the next sibling (description)
//         description.classList.toggle('hidden-description'); // Toggle visibility
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const toggleTitles = document.querySelectorAll(".toggle-title");

    toggleTitles.forEach((title) => {
        title.addEventListener("click", function () {
            const description = this.nextElementSibling;
            if (description.classList.contains("hidden")) {
                description.classList.remove("hidden");
            } else {
                description.classList.add("hidden");
            }
        });
    });
});
