// Get elements
const openSliderButton = document.querySelector(".open-slider");
const colorSlider = document.getElementById("color-slider");
const closeSliderButton = document.querySelector(".close-slider");
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const overview2 = document.getElementById("overview2");
const moveButtons = {
  topLeft: document.querySelector(".move-top-left"),
  topRight: document.querySelector(".move-top-right"),
  bottomLeft: document.querySelector(".move-bottom-left"),
  bottomRight: document.querySelector(".move-bottom-right"),
};

// Open the slider
openSliderButton.addEventListener("click", () => {
  colorSlider.style.display = "block";
  // Set the slider values to the current color
  const currentColor = getComputedStyle(overview2).color;
  const rgb = currentColor.match(/\d+/g).map(Number);
  redRange.value = rgb[0];
  greenRange.value = rgb[1];
  blueRange.value = rgb[2];
});

// Close the slider
closeSliderButton.addEventListener("click", () => {
  colorSlider.style.display = "none";
});

// Update the text color based on slider values
const updateColor = () => {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;
  overview2.style.color = `rgb(${r}, ${g}, ${b})`;
};

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

// Move the slider to different corners
moveButtons.topLeft.addEventListener("click", () => {
  colorSlider.style.top = "20px";
  colorSlider.style.left = "20px";
  colorSlider.style.right = "auto";
  colorSlider.style.bottom = "auto";
});

moveButtons.topRight.addEventListener("click", () => {
  colorSlider.style.top = "20px";
  colorSlider.style.left = "auto";
  colorSlider.style.right = "20px";
  colorSlider.style.bottom = "auto";
});

moveButtons.bottomLeft.addEventListener("click", () => {
  colorSlider.style.top = "auto";
  colorSlider.style.left = "20px";
  colorSlider.style.right = "auto";
  colorSlider.style.bottom = "20px";
});

moveButtons.bottomRight.addEventListener("click", () => {
  colorSlider.style.top = "auto";
  colorSlider.style.left = "auto";
  colorSlider.style.right = "20px";
  colorSlider.style.bottom = "20px";
});
