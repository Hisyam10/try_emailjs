// 1. Inisialisasi dengan Public Key Anda
(function() {
    emailjs.init("ZytpAn1OKm6PMUEsq"); // Ganti dengan Public Key asli Anda
})();

window.onload = function() {
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('btn-kirim');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah refresh halaman

        btn.innerText = 'Mengirim...';

        // 2. Mengirim form menggunakan sendForm
        // Parameter: SERVICE_ID, TEMPLATE_ID, Element Form
        emailjs.sendForm('service_eopupwg', 'template_8hl9pam', this)
            .then(() => {
                btn.innerText = 'Kirim Sekarang';
                alert('Pesan Terkirim!');
                form.reset(); // Mengosongkan form setelah berhasil
            }, (err) => {
                btn.innerText = 'Kirim Sekarang';
                alert('Gagal mengirim: ' + JSON.stringify(err));
            });
    });
}