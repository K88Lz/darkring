// Accordion (Açılır/Kapanır Panel) için JavaScript
const accordionButtons = document.querySelectorAll('.accordion-button');

// Her bir accordion butonuna tıklama olayını ekleyin
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = button.nextElementSibling;

        // Eğer panel açıksa, kapat
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            // Tüm diğer açık panelleri kapat
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });
            // Şu an tıklanan paneli aç
            content.style.display = 'block';
        }
    });
});

// Accordion menüsünde her bir item için tıklama işlevi
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.accordion-item');
    
    accordions.forEach(accordion => {
        const button = accordion.querySelector('.accordion-button');
        const content = accordion.querySelector('.accordion-content');

        button.addEventListener('click', () => {
            if (content.style.display === '' || content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
});
