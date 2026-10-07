const pokeButton = document.getElementById("pokeButton");
const pokeEmojis = document.getElementById("pokeEmojis");

const emojis = ["👻", "😎", "🖤", "🌙", "❤️"];

let pokeCount = 0;

const pokeCountDisplay = document.getElementById("pokeCount");

pokeButton.addEventListener("click", () => {

    pokeCount++;

    pokeCountDisplay.textContent = pokeCount;

    for (let i = 0; i < 5; i++) {

        const emoji = document.createElement("span");

        emoji.classList.add("poke-emoji");

        emoji.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.setProperty(
            "--x",
            `${Math.random() * 100 - 50}px`
        );

        emoji.style.setProperty(
            "--y",
            `${-Math.random() * 80 - 30}px`
        );

        pokeEmojis.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 1200);
    }
});

const musicButton = document.getElementById("musicButton"); 
 
    const music = new Audio("totoong tayo.mp3"); 
 
    music.volume = 0.5; 
 
   musicButton.addEventListener("click", () => { 
 
    if (music.paused) { 
        music.play(); 
        musicButton.textContent = "Miss you"; 
    } else { 
        music.pause(); 
        musicButton.textContent = "Balik kana"; 
    } 
});

const profileHover = document.querySelector(".profile-hover");

profileHover.addEventListener("click", () => {
    profileHover.classList.toggle("active");
});