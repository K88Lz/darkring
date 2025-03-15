// Form doğrulama
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Sayfanın yeniden yüklenmesini engeller

    // Form elemanlarını al
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // Boş alanları kontrol et
    if (name === "" || email === "" || message === "") {
        alert("Lütfen tüm alanları doldurun!");
        return;  // Formu göndermeyi engelle
    }

    // Başarı mesajı
    alert(`Mesajınız alındı! Teşekkür ederiz, ${name}.`);
    
    // Formu sıfırlama
    form.reset();
});

// Bot Davet Linkine Tıklama
const inviteButton = document.querySelector(".button");

inviteButton.addEventListener("click", function() {
    alert("Botu davet etmek için bağlantıyı tıklıyorsunuz!");
});
