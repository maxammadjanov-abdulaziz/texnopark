const toggleButtons = document.querySelectorAll('.toggle-answer');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        toggleButtons.forEach(btn => {
            const answer = btn.closest('.faq-item').querySelector('.answer');
            const faqItem = btn.closest('.faq-item');

            if (btn !== this) {
                answer.classList.remove('show');
                faqItem.classList.remove('active');
                btn.src = './img/add-logo.svg';
            }
        });

        const answer = this.closest('.faq-item').querySelector('.answer');
        const faqItem = this.closest('.faq-item');
        answer.classList.toggle('show');
        faqItem.classList.toggle('active');

        if (answer.classList.contains('show')) {
            this.src = './img/close-logo.svg';
        } else {
            this.src = './img/add-logo.svg';
        }
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
    document.body.style.overflow = 'hidden';

}
function CloseMenu() {
    const navContainer2 = document.getElementById("nav-container")
    navContainer2.classList.toggle("active")
    document.body.style.overflow = 'auto';

}


window.addEventListener('scroll', function () {
    const header = document.querySelector('.stylesde');

    if (window.scrollY > 0) { // Проверяем, что страница прокручена вниз
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



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

            const isVisible = !description.classList.contains("hidden");

            toggleTitles.forEach((otherTitle) => {
                const otherDescription = otherTitle.nextElementSibling;
                if (!otherDescription.classList.contains("hidden")) {
                    otherDescription.classList.add("hidden");
                }
            });

            if (!isVisible) {
                description.classList.toggle("hidden");
            }
        });
    });
});





function openModal() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('loginModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function submitLogin() {
    alert("Данные отправлены!");
    closeModal();
}

function toggleMenu() {
    const navContainer = document.getElementById('nav-container');
    navContainer.classList.toggle('active');
}