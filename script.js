/*=========================================
THE WEDDING OF
SANTI & ROZZY
=========================================*/

const openButton = document.getElementById("openInvitation");
const cover = document.getElementById("cover");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const wrapper = document.querySelector(".desktop-wrapper");
const frame = document.querySelector(".mobile-frame");
const scrollTop = document.getElementById("scrollTop");

/*=========================================
OPEN INVITATION
=========================================*/

openButton.addEventListener("click", async ()=>{

    wrapper.classList.add("opened");
    frame.classList.add("opened");
    document.body.classList.add("opened");

    frame.scrollTop = 0;

    mainContent.classList.add("show");

    requestAnimationFrame(()=>{
        cover.classList.add("hide");
    });

    setTimeout(()=>{
        cover.remove();
    },1800);

    try{
        await music.play();
        musicBtn.classList.add("playing");
    }catch(e){}

});

/*=========================================
MUSIC BUTTON
=========================================*/

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.classList.add("playing");

    }else{

        music.pause();

        musicBtn.classList.remove("playing");

    }

});

/*=========================================
COUNTDOWN
=========================================*/

const weddingDate = new Date("September 24, 2026 08:00:00").getTime();

const countdown = ()=>{

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML = String(days).padStart(2,"0");

    document.getElementById("hours").innerHTML = String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML = String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML = String(seconds).padStart(2,"0");

}

countdown();

setInterval(countdown,1000);

/*=========================================
SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.05
});

document.querySelectorAll(".reveal").forEach(el=>{

    observer.observe(el);

});

/*=========================================
SCROLL TOP
=========================================*/

frame.addEventListener("scroll",()=>{

    if(frame.scrollTop > 300){

        scrollTop.style.opacity="1";
        scrollTop.style.pointerEvents="auto";

    }else{

        scrollTop.style.opacity="0";
        scrollTop.style.pointerEvents="none";

    }

});

scrollTop.addEventListener("click",()=>{

    frame.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
LOADING
=========================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/*=========================================
LIGHTBOX GALLERY
=========================================*/

const images = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.id="lightbox";

lightbox.innerHTML=`

    <span class="close-lightbox">&times;</span>

    <img class="lightbox-image">

`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox-image");

const closeLightbox = lightbox.querySelector(".close-lightbox");

images.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("show");

        lightboxImage.src = img.src;

        document.body.style.overflow="hidden";

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("show");

    document.body.style.overflow="auto";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

        document.body.style.overflow="auto";

    }

});

/*=========================================
KEYBOARD ESC
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

        document.body.style.overflow="auto";

    }

});

/*=========================================
PARALLAX HERO
=========================================*/

const heroPhoto=document.querySelector(".hero-photo");

window.addEventListener("scroll",()=>{

    const scroll=window.pageYOffset;

    if(heroPhoto){

        heroPhoto.style.transform=`translateY(${scroll*0.18}px) scale(1.08)`;

    }

});

/*=========================================
ACTIVE MUSIC STATE
=========================================*/

music.addEventListener("play",()=>{

    musicBtn.classList.add("playing");

});

music.addEventListener("pause",()=>{

    musicBtn.classList.remove("playing");

});

/*=========================================
SMOOTH BUTTON EFFECT
=========================================*/

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("mousedown",()=>{

        btn.style.transform="scale(.96)";

    });

    btn.addEventListener("mouseup",()=>{

        btn.style.transform="";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";

    });

});

/*=========================================
PRELOAD GALLERY
=========================================*/

window.addEventListener("load",()=>{

    const preload=[];

    for(let i=1;i<=12;i++){

        const img=new Image();

        img.src=`assets/img/${String(i).padStart(2,"0")}.jpeg`;

        preload.push(img);

    }

});

/*==================================
GOOGLE CALENDAR
==================================*/

const googleCalendar = document.getElementById("googleCalendar");

googleCalendar.addEventListener("click", function () {

    const title = "Pernikahan Santi & Rozzy";

    const details =
`Dengan penuh sukacita kami mengundang Anda menghadiri pernikahan kami.

Santi & Rozzy

Lokasi :
Dsn. Sambongan
Kel. Karangboyo
Kec. Cepu
Kab. Blora
Jawa Tengah

Google Maps :
https://maps.app.goo.gl/oC3YJ7FaNnyaHBiv6`;

    const location =
"Dsn. Sambongan, Kel. Karangboyo, Kec. Cepu, Kab. Blora, Jawa Tengah";

    // 24 September 2026
    // Jam 08.00 - 12.00 WIB

    const start = "20260924T010000Z";
    const end   = "20260924T050000Z";

    const url =
"https://calendar.google.com/calendar/render?action=TEMPLATE"
+ "&text=" + encodeURIComponent(title)
+ "&dates=" + start + "/" + end
+ "&details=" + encodeURIComponent(details)
+ "&location=" + encodeURIComponent(location);

    window.open(url, "_blank");

});

/*==================================
WEDDING GIFT
==================================*/

const giftButton = document.getElementById("giftButton");
const giftModal = document.getElementById("giftModal");
const closeGift = document.getElementById("closeGift");

giftButton.addEventListener("click", () => {

    giftModal.classList.add("show");

});

closeGift.addEventListener("click", () => {

    giftModal.classList.remove("show");

});

giftModal.addEventListener("click", (e) => {

    if (e.target === giftModal) {

        giftModal.classList.remove("show");

    }

});


/*==================================
COPY REKENING
==================================*/

const copyButtons = document.querySelectorAll(".copyBtn");

copyButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        navigator.clipboard.writeText(button.dataset.copy);

        button.classList.add("copied");

        setTimeout(()=>{
            button.classList.remove("copied");
        },1800);

    });

});

/*==================================
RSVP & GUESTBOOK (GOOGLE FORM AJAX)
==================================*/
const rsvpForm = document.getElementById("rsvpForm");
const btnKirim = document.getElementById("btnKirim");
const guestbookContainer = document.getElementById("guestbookContainer");

// 1. GANTI INI: URL Action dari Google Form Anda
const formActionURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfB7_NI8tL_Mo0m5trgZAxVk5uSBnHaNBGwnbJMgk-Dk0j7VA/formResponse';

// 2. GANTI INI: URL Web App dari Google Apps Script Anda (Untuk baca Sheet)
const scriptURL = 'https://script.google.com/macros/s/AKfycbzKcB2nF1TqW37DneNZNPu2jdRjd-PHQVdinQdloxqeUu1MPjtWnjYqlaCpgk4xvuND/exec';

if(rsvpForm) {
    rsvpForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Mencegah halaman refresh / lari ke atas

        const originalText = btnKirim.textContent;
        btnKirim.textContent = "Mengirim...";
        btnKirim.disabled = true;

        const formData = new FormData(rsvpForm);

        // Mengirim data diam-diam
        fetch(formActionURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(() => {
            alert("Terima kasih! RSVP dan Ucapan Anda telah terkirim.");
            rsvpForm.reset();
            btnKirim.textContent = originalText;
            btnKirim.disabled = false;
            
            // Langsung panggil ulang ucapannya agar muncul tanpa refresh!
            loadUcapan(); 
        })
        .catch(error => {
            alert("Terjadi kesalahan. Silakan coba lagi.");
            btnKirim.textContent = originalText;
            btnKirim.disabled = false;
        });
    });
}

function loadUcapan() {
    if(!guestbookContainer) return;

    fetch(scriptURL)
        .then(response => response.json())
        .then(data => {
            guestbookContainer.innerHTML = ''; // Kosongkan teks "Memuat..."

            // Balik urutan data agar ucapan terbaru ada di paling atas
            data.reverse().forEach(item => {
                if(item.nama && item.ucapan) {
                    const div = document.createElement('div');
                    div.className = 'guestbook-item';

                    // Ganti warna label sesuai kehadiran
                    const badgeClass = item.kehadiran === 'Hadir' ? 'badge-hadir' : 'badge-absen';
                    const date = new Date(item.waktu).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
});

div.innerHTML = `
    <div class="guestbook-head">
        <h4>${item.nama}</h4>
        <small>${date}</small>
    </div>
    <p>${item.ucapan}</p>
`;
                    guestbookContainer.appendChild(div);
                }
            });
        })
        .catch(error => {
            guestbookContainer.innerHTML = '<p style="text-align:center; color:#777;">Jadilah yang pertama memberikan ucapan!</p>';
        });
}

// Panggil fungsi memuat ucapan saat website pertama kali dibuka
window.addEventListener("load", () => {
    loadUcapan();
});

function spawnParticles(){
  document.querySelectorAll('.particle-layer').forEach(layer=>{
    const count = parseInt(layer.dataset.count || '24', 10);
    for(let i=0;i<count;i++){
      const p = document.createElement('div');
      p.className='particle';
      const size = (Math.random()*8+6).toFixed(1);
      const dur  = (Math.random()*22+20).toFixed(1);
      p.style.width  = size+'px';
      p.style.height = size+'px';
      p.style.left   = (Math.random()*100).toFixed(1)+'%';
      p.style.setProperty('--drift',((Math.random()-0.5)*110).toFixed(0)+'px');
      p.style.setProperty('--op',(Math.random()*0.45+0.35).toFixed(2));
      p.style.animationDuration = dur+'s';
      p.style.animationDelay = '-'+(Math.random()*dur).toFixed(1)+'s';
      layer.appendChild(p);
    }
  });
}
spawnParticles();