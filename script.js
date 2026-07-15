// --- Vintage Album Database (Corrected YT Links & 8s Skipping) ---
const shelfScrolls = [
    {
        id: "1",
        flower: "🌼",
        label: "I",
        title: "Track 1: Hey dude",
        embedId: "kbB_AaW6RtU",
        startTime: 8, 
        content: `ok tbh its like Soo funny tht like u thgt I WS a dude at the beginning like bruu 😭 "hey dude" Like like imagine that the love of ur life ok started off as some random guy who thgt u were a dude at first Gawdd ur so dumb u idiot mwahh And the fact tht ranuki hd to jump in and tell u I wasnt a dude 💀 bru i cnt lol eh yk what matters tho tht even in tht dumb way I'm glad we met`
    },
    {
        id: "2",
        flower: "🌻",
        label: "II",
        title: "Track 2: Tapir & Tenge",
        embedId: "bnVkf-z28YU",
        startTime: 8, 
        content: `Okay but I still need to talk about something... \nThe fact that you actually called me Darkest 😭\nLike excuse me sir???\nDo you remember that?? How could you do that to me 😔\n*insert the most dramatic sad face ever*\nI was just there existing and you decided that "Darkest" was my name now 💀\nYou really looked at me and thought: "Yep. That's the one."\n\nBut tbh.. I can't even be mad cuz somehow all your weird nicknames became some of my favourite memories.(yea I'm def lovesick gd daym it 😭😭) but srsly how cud u call me tenge cmonn I mean like tapirs are cute ok :3 see I ws calling u cute and U U U LIT STRTED CALLING ME TENGE :( frick uuu I hate UU (pleading face) ok ok but when u think abt it tapir and tenge lwk goated goated duo fr lolol ehh ik u thgt I ws annoying u wanted to get rid of me fss GUESS WHT THOO THTS NEVER GONNA HAPPEN UR STUCK WITH MEE BLEHHHH :P`
    },
    {
        id: "3",
        flower: "🌹",
        label: "III",
        title: "Track 3: The safe place",
        embedId: "RI-HOQ27QEM",
        startTime: 126, 
        content: `Mhmm u rmbr those days when like evrythin was fuked like when the friend grp was fallin apart u and ranuki were idk y'all were always fukd neh I mean I rlly wudnt wanna rmbr anythin abt those times but I do cuz for sum dmn reason we got closer cuz of tht shi so I'm glad Yk I'm glad tht u trusted me engh to vent to me I mean u say tht I helped u but it still hurts when I think Abt it like imagine the the person u love more than ur own life hving to go thru all tht and u Hd no way of helping I mean ig at least my words brought u comfort during those times at least tht heh omg I ws so dumb bruuu my ways of cheering u up were so dumb I swear at least it made u laugh ne I hope it did or did u lie Abt tht -_- ??? And the brothers day msg Im glad u felt it ^^ \n\nWell ig my love language is teasing Yk its my messy way of sayin I love u :33 and js so Yk ur worth everything and anything ok? I'd do anything for u doesn't matter if u believe me or not Dont u dare leave not :( pls`
    },
    {
        id: "4",
        flower: "🎈",
        label: "IV",
        title: "Track 4: What If I Told You I Like You",
        embedId: "5ZTEjjh7clE",
        startTime: 8,
        content: `God this is so funny i swear Like i cnt believe u actually fell for this alr so ok ik u’ll nvr believe i hd on crush on u nuhh what to do ithin so like im so evil bahaha when i told u tht i tied tht song to senula i wanted to see ur reaction i wanted to know if u’d get jelly but then idk ur the one who wanted to set me up with ANOTHER GUY ahemm anyway ahhh imagine my reaction when u put tht on ur note ongg i still cnt believe u liked me even for my personality i nvr thgt i ws likeable i mean i never thgt YOU wud like me wait no love me ? im still confused abt tht AHH DONT KILL ME`
    },
    {
        id: "5",
        flower: "✨",
        label: "V",
        title: "Track 5: The website",
        embedId: "3UV--8RA4ts",
        startTime: 43, 
        content: `Like ok i rmbr this one line “stop ur music” hehe like the moment when i clicked on it and then like all those small details meant so much i cnt even word it its js like to think tht someone wud actually do sumthin like tht for me like put in all tht effort js to ask me u dont know how much i treasure it. AHhh the fact tht i clicked on maybe first cuz i wanted to read the whole thing i felt it a lot it felt like u put ur emotions out in a vulnerable state the fact tht u trusted me tht much i js felt it.`
    },
    {
        id: "6",
        flower: "💖",
        label: "VI",
        title: "Track 6: Official?",
        embedId: "WHHkVUaOxe4",
        startTime: 8,
        content: `Allh i rmbr this god frick uu i swear somehow u found ur way into my heart and my headd nuhh u sneaky lil thing -_- god i prolly looked like a retard tht day at the exam hall cuz i wud js randomly strt smiling cuz my brain decided to go “hehe adan 😭😭” omgg WHAT HAVE U DONE TO MEE 😭😭 AAAAAAAAA Im in luv omg IM IN LOVEEE EHEHE \nI cnt- 😭💗..\nOmg  God why are you like this, why do I like you so much 😭💗`
    },
    {
        id: "7",
        flower: "🚗",
        label: "VII",
        title: "Track 7: Dab me up",
        embedId: "xLT5wzJ0Crw",
        startTime: 8,
        content: `Tiff tuff bb 🥹 im crinee\nSrsly tho we actually met nehh 🥹 AAAAAAAAAa im nvr forgetting tht dayyy\nThe car ride, the park AND eeeeeeee the kiss and tht hug js aftr  omgg  anddd the fricking forehead kiss AAAAAAA ehehe i actually rizzed u up nehh Im tuff like dat :33\n\nI LOVEE YOUU SOOO DAMN MUCHHH MORE THN YU’LL EVER KNOW`
    },
    {
        id: "8",
        flower: "🧸",
        label: "VIII",
        title: "Track 8: Nickname lore fr",
        embedId: "CEG4xZUP2qo",
        startTime: 8,
        content: `We actually went from calling each othr\nTapir & Tenge 💀 to little flower 🌸 & teddy bear 🧸\n\n😭😭😭 i cnt ts is too funny`
    },
    {
        id: "∞",
        flower: "🌸",
        label: "∞",
        title: "Track ∞: To be continued?",
        embedId: "Otv5AljKKhc",
        startTime: 8,
        content: `Unfortunately for u it aint 😛\nBAHAHA I AINT LEAVING FOR SHII NGAA BEAR WITH ITT \n\nUntil next time ithin 😉`
    }
];

// --- YouTube Privacy-Enhanced Iframe API Systems ---
let ytPlayer = null;
let isPlayerReady = false;
let openedScrollsTracker = new Set();

window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('audio-player-placeholder', {
        height: '1',
        width: '1',
        videoId: shelfScrolls[0].embedId,
        playerVars: {
            'host': 'https://www.youtube-nocookie.com', // Blocks ad ecosystem connection paths
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'rel': 0,
            'modestbranding': 1,
            'iv_load_policy': 3
        },
        events: {
            'onReady': () => { isPlayerReady = true; }
        }
    });
}

// --- Dynamic Crusty Scroll Rendering Generator ---
const shelfContainer = document.getElementById('scroll-shelf');
shelfScrolls.forEach(scroll => {
    const scrollItem = document.createElement('div');
    scrollItem.className = 'scroll-item';
    scrollItem.onclick = () => openScrollParchment(scroll);
    
    scrollItem.innerHTML = `
        <div class="scroll-icon-header">${scroll.flower}</div>
        <div class="scroll-cylinder-body">
            <div class="scroll-string-tie"></div>
            <div class="scroll-label-tag">${scroll.label}</div>
        </div>
        <div class="scroll-caption-text">${scroll.title.split(':')[0]}</div>
    `;
    shelfContainer.appendChild(scrollItem);
});

// --- Handwritten Letter Scripting Mechanism ---
let typewriterInterval;
function openScrollParchment(scroll) {
    const modal = document.getElementById('scroll-modal');
    const title = document.getElementById('modal-scroll-title');
    const bodyContainer = document.getElementById('modal-scroll-body');
    const trackLabel = document.getElementById('current-track-label');

    title.innerText = `${scroll.flower} ${scroll.title}`;
    trackLabel.innerText = scroll.title;
    bodyContainer.innerText = "";
    modal.style.display = 'flex';

    openedScrollsTracker.add(scroll.id);

    // Dynamic Typewriter Loop Execution
    clearInterval(typewriterInterval);
    let charIndex = 0;
    typewriterInterval = setInterval(() => {
        if (charIndex < scroll.content.length) {
            bodyContainer.innerHTML += scroll.content.charAt(charIndex);
            charIndex++;
            bodyContainer.scrollTop = bodyContainer.scrollHeight;
        } else {
            clearInterval(typewriterInterval);
        }
    }, 25);

    // Video Engine Data Swap & Skip Execution
    if (isPlayerReady && ytPlayer) {
        ytPlayer.loadVideoById({
            videoId: scroll.embedId,
            startSeconds: scroll.startTime,
            suggestedQuality: 'small'
        });
        ytPlayer.playVideo();
    }
}

// Exit Letter Operations
window.closeScroll = function() {
    clearInterval(typewriterInterval);
    document.getElementById('scroll-modal').style.display = 'none';
    
    if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
        ytPlayer.pauseVideo();
    }

    // Spawns the secret bookmark pull tab if the Infinity entry was closed
    if (openedScrollsTracker.has("∞")) {
        document.getElementById('secret-trigger-zone').style.display = 'block';
    }
}

// --- Birthday Grand Finale Activations ---
window.revealGrandFinale = function() {
    document.getElementById('finale-modal').style.display = 'flex';
}

window.closeFinale = function() {
    document.getElementById('finale-modal').style.display = 'none';
}

// --- Floating Kawaii Emoji Animation Loop Engine ---
const canvas = document.getElementById('emoji-drop-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const emojiPool = ['🌸', '✨', '🧸', '💖', '🐾', '🎀', '🍰', '🐰', '🌟', '🍭'];
const particles = [];

for (let i = 0; i < 25; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        char: emojiPool[Math.floor(Math.random() * emojiPool.length)],
        fontSize: Math.random() * 14 + 16,
        speedY: Math.random() * 1.2 + 0.5,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * Math.PI,
        rotSpeed: Math.random() * 0.02 - 0.01
    });
}

function animateEmojis() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;
        
        if (p.y > canvas.height) {
            p.y = -30;
            p.x = Math.random() * canvas.width;
            p.char = emojiPool[Math.floor(Math.random() * emojiPool.length)];
        }
        
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.fontSize}px serif`;
        ctx.textAlign = 'center';
        ctx.fillText(p.char, 0, 0);
        ctx.restore();
    });
    
    requestAnimationFrame(animateEmojis);
}
animateEmojis();
