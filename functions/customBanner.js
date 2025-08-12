const phrases = [ 
    "[🌿] Non Skeetless dude.",
    "[🌿] Khanverix on top.",
    "[🌿] Leozin said hello!",
    "[🌿] God i wish i had Khanverix.",
    "[🌿] Get good get Khanverix!",
    "[🌿] khanverix.hub goes brrrrr" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
