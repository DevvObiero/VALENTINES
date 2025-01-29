const quotes = [
  "The day I met you, I began to forget a life without you",
  "Every moment with you is a beautiful memory in the making",
  "You are the reason my world is so bright",
  "With you, every day feels like a new adventure",
  "Any day spent with you is my favourite day",
  "All the better days are thre ones spent with you",
  "If i had a flower for every time i thought of you",
  "I'd be walking in a garded of flowers forever",
  "I find you in every song i listen to",
  "I fell for you and I an still falling",
  "I could spend hours lost in your eyes",
  "May i kiss you scars",
  "Your presence is the melody that makes my heart sing",
  "Your presence is the melody that makes my heart sing"
];

let index = 0;

function changeQuote() {
  index = (index + 1) % quotes.length;
  document.getElementById("quote").textContent = quotes[index];
}

setInterval(changeQuote, 5000); // Change every 5 seconds

setTimeout(() => {
  const heading = document.querySelector(".change");
  heading.textContent = "I LOVE YOU";
}, 5000); // 3000 milliseconds = 3 seconds

const noBtn = document.getElementById("noBtn");

function moveButton(maxMove) {
  let parent = noBtn.parentElement;

  // Generate random movement within ±maxMove
  let randomX = Math.random() * (2 * maxMove) - maxMove;
  let randomY = Math.random() * (2 * maxMove) - maxMove;

  // Get current position
  let newLeft = noBtn.offsetLeft + randomX;
  let newTop = noBtn.offsetTop + randomY;

  // Keep the button inside the container
  let parentRect = parent.getBoundingClientRect();
  let btnRect = noBtn.getBoundingClientRect();

  if (newLeft < 0) newLeft = 0;
  if (newLeft + btnRect.width > parentRect.width)
    newLeft = parentRect.width - btnRect.width;
  if (newTop < 0) newTop = 0;
  if (newTop + btnRect.height > parentRect.height)
    newTop = parentRect.height - btnRect.height;

  // Apply new position
  noBtn.style.left = newLeft + "px";
  noBtn.style.top = newTop + "px";
}

// Move within 140px when clicked
noBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent navigation
  moveButton(140); // Now moves randomly within 140px
});

// Move within 100px when hovered (for desktops)
noBtn.addEventListener("mouseenter", function () {
  moveButton(100);
});

// Move within 100px when touched (for mobile)
noBtn.addEventListener("touchstart", function (event) {
  event.preventDefault(); // Prevent accidental clicks
  moveButton(100);
});

document.body.style.cssText =
  "overflow: hidden; position: fixed; width: 100vw; height: 100vh; touch-action: none;";
