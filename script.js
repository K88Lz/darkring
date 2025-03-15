// Accordion (Açılır/Kapanır Panel) için JavaScript
const accordionButtons = document.querySelectorAll('.accordion-button');

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
