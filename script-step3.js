const openSliderButton = document.querySelector(".open-slider");
const colorSlider = document.getElementById("color-slider");
const closeSliderButton = document.querySelector(".close-slider");
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const overview2 = document.getElementById("overview2");
const filterButtons = {
  outline: document.getElementById("add-outline"),
  contrast: document.getElementById("increase-contrast"),
  reset: document.getElementById("reset-filters"),
};

// Helper functions for filters
const addOutline = () => {
  overview2.style.textShadow = "1px 1px 2px black, -1px -1px 2px black";
};
const increaseContrast = () => {
  overview2.style.filter = "contrast(150%)";
};
const resetFilters = () => {
  overview2.style.textShadow = "none";
  overview2.style.filter = "none";
};

// Event listeners for filter buttons
filterButtons.outline.addEventListener("click", addOutline);
filterButtons.contrast.addEventListener("click", increaseContrast);
filterButtons.reset.addEventListener("click", resetFilters);

// Color slider logic
const updateColor = () => {
  const r = redRange.value;
  const g = greenRange.value;
  const b = blueRange.value;
  overview2.style.color = `rgb(${r}, ${g}, ${b})`;
};

redRange.addEventListener("input", updateColor);
greenRange.addEventListener("input", updateColor);
blueRange.addEventListener("input", updateColor);

openSliderButton.addEventListener("click", () => {
  colorSlider.style.display = "block";
});

closeSliderButton.addEventListener("click", () => {
  colorSlider.style.display = "none";
});
