document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  let noClickCount = 0;

  yesBtn.addEventListener("click", () => {
    window.location.href = "celebration.html";
  });

  noBtn.addEventListener("click", () => {
    noClickCount++;
    const textIndex = noClickCount % noTexts.length;
    noBtn.textContent = noTexts[textIndex];
  });
});
