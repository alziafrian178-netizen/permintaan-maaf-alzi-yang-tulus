document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const heartsContainer = document.getElementById('hearts-container');

    // 1. Fungsi membuat hati melayang
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Jalankan animasi hati terus menerus
    setInterval(createHeart, 300);

    // 2. Logika tombol "Enggak" yang menghindar
    function moveButton() {
        // Mendapatkan lebar dan tinggi layar dikurangi ukuran tombol
        const maxX = window.innerWidth - btnNo.offsetWidth;
        const maxY = window.innerHeight - btnNo.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        btnNo.style.position = 'fixed';
        btnNo.style.left = randomX + 'px';
        btnNo.style.top = randomY + 'px';
    }

    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Mencegah klik saat di-tap di mobile
        moveButton();
    });

    // 3. Logika saat tombol "Maafin" diklik
    btnYes.addEventListener('click', () => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        
        // Hapus tombol "Enggak" agar tidak mengganggu tampilan akhir
        btnNo.style.display = 'none';

        // Efek selebrasi hati yang banyak
        for(let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 50);
        }
    });
});