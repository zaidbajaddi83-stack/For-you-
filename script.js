const text = "On dit que la vie est un voyage, et la présence d'une personne aussi distinguée et exceptionnelle que toi donne à ce voyage un sens plus beau et plus noble. Parce que tu mérites des vœux exceptionnels à ton image, j’ai conçu pour toi ce 'voyage spécial' à travers ce lien... Je te souhaite une nouvelle année pleine de paix, de succès et de surprises joyeuses qui ressemblent à la pureté de ton cœur. Joyeux anniversaire et reste toujours aussi rayonnante.";

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

startBtn.addEventListener("click", () => {
    music.play();
    gsap.to("#start-screen", { opacity: 0, duration: 0.5, onComplete: () => {
        document.getElementById("start-screen").style.display = "none";
        document.getElementById("animation-zone").style.display = "block";
        gsap.from("#cake-box", { scale: 0, duration: 1, ease: "back.out" });
    }});
});

// عند الضغط على الكيك يظهر الهدية
document.getElementById("cake-box").addEventListener("click", () => {
    gsap.to("#cake-box", { opacity: 0, scale: 0, duration: 0.5, onComplete: () => {
        document.getElementById("cake-box").style.display = "none";
        document.getElementById("gift-box").style.display = "block";
        gsap.from("#gift-box", { y: -200, duration: 1, ease: "bounce.out" });
    }});
});

// عند الضغط على الهدية يظهر الألبوم
document.getElementById("gift-box").addEventListener("click", () => {
    gsap.to("#gift-box", { opacity: 0, scale: 0, duration: 0.5, onComplete: () => {
        document.getElementById("animation-zone").style.display = "none";
        document.getElementById("album-scene").style.display = "block";
        gsap.from(".heart-photo", { scale: 0, stagger: 0.2, duration: 1, ease: "back.out" });
    }});
});

// الانتقال للرسالة
document.getElementById("nextToLetter").addEventListener("click", () => {
    gsap.to("#album-scene", { opacity: 0, duration: 0.5, onComplete: () => {
        document.getElementById("album-scene").style.display = "none";
        document.getElementById("main-scene").style.display = "flex";
        startTyping();
    }});
});

function startTyping() {
    let i = 0;
    const target = document.getElementById("typing-text");
    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, 40);
        } else {
            gsap.to("#signature", { opacity: 1, duration: 1 });
        }
    }
    gsap.from(".letter-box", { opacity: 0, y: 50, duration: 1, onComplete: type });
}