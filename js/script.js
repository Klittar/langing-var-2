document.addEventListener('DOMContentLoaded', (event) => {
    const items = document.querySelectorAll('.item');
    items[0].classList.add('active'); // Первый пункт открыт по умолчанию

    items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

function openPDF() {
    window.open("kp.pdf");
}



