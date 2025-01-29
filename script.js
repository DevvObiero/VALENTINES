const noBtn = document.getElementById("noBtn");
const parentContainer = document.querySelector(".btnN");

function moveButton() {
  const parentRect = parentContainer.getBoundingClientRect();
  const rect = noBtn.getBoundingClientRect();

  // Get the center of the parent container
  const centerX = parentRect.left + parentRect.width / 2;
  const centerY = parentRect.top + parentRect.height / 2;

  // Generate random positions within a 400px-500px radius
  let angle = Math.random() * 2 * Math.PI; // Random angle
  let radius = Math.random() * 100 + 400; // Random distance (between 400px and 500px)

  let newX = centerX + radius * Math.cos(angle) - rect.width / 2;
  let newY = centerY + radius * Math.sin(angle) - rect.height / 2;

  // Keep the button within a reasonable area
  newX = Math.max(
    parentRect.left,
    Math.min(parentRect.right - rect.width, newX)
  );
  newY = Math.max(
    parentRect.top,
    Math.min(parentRect.bottom - rect.height, newY)
  );

  // Apply new position
  noBtn.style.transform = `translate(${newX - rect.left}px, ${
    newY - rect.top
  }px)`;
  noBtn.style.transition = "transform 0.3s ease-out";
}

// Move button on mobile touch
noBtn.addEventListener("touchstart", moveButton);

// Move button when mouse is near on PC
document.addEventListener("mousemove", (event) => {
  const rect = noBtn.getBoundingClientRect();
  const distanceX = Math.abs(event.clientX - (rect.left + rect.width / 2));
  const distanceY = Math.abs(event.clientY - (rect.top + rect.height / 2));

  if (distanceX < 50 && distanceY < 50) {
    moveButton();
  }
});
