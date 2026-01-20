const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let noClickCount = 0;

yesBtn.addEventListener('click', () => {
    window.location.href = 'celebration.html';
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    const responseIndex = noClickCount % noResponses.length;
    noBtn.textContent = noResponses[responseIndex];
});
