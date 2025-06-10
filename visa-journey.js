const originSelect = document.getElementById('origin');
const destinationSelect = document.getElementById('destination');
const originLabel = document.querySelector('.origin');
const destinationLabel = document.querySelector('.destination');

function updateLabels() {
  const origin = originSelect.value;
  const destination = destinationSelect.value;

  originLabel.textContent = origin;
  destinationLabel.textContent = destination;

  // Optionally adjust map positions later with coordinates
}

originSelect.addEventListener('change', updateLabels);
destinationSelect.addEventListener('change', updateLabels);
