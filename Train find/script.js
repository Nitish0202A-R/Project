const trains = [
  {
    name: "Swatantrata Senani Express",
    trainNumber: "12561",
    from: "Chapra",
    to: "New Delhi",
    time: "12:35 AM",
    status: "On Time"
  },
  {
    name: "Sanghamita SF Express",
    trainNumber: "12296",
    from: "Danapur",
    to: "SMVT Bengaluru",
    time: "08:25 PM",
    status: "Delayed"
  },
  {
    name: "Bagh Express(CPR-HWH)",
    trainNumber: "13020",
    from: "Chapra",
    to: "Howrah Junction",
    time: "05:15 PM",
    status: "On Time"
  }
];

function searchTrains() {
  const source = document.getElementById('source').value.trim().toLowerCase();
  const destination = document.getElementById('destination').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('results');

  resultsContainer.innerHTML = '';

  const found = trains.filter(train =>
    train.from.toLowerCase() === source &&
    train.to.toLowerCase() === destination
  );

  if (found.length === 0) {
    resultsContainer.innerHTML = "<p>No trains found for your search.</p>";
    return;
  }

  found.forEach(train => {
    const trainCard = document.createElement('div');
    trainCard.className = 'train-card';
    trainCard.innerHTML = `
      <h3>${train.name} (${train.trainNumber})</h3>
      <p><strong>From:</strong> ${train.from}</p>
      <p><strong>To:</strong> ${train.to}</p>
      <p><strong>Time:</strong> ${train.time}</p>
      <p><strong>Status:</strong> ${train.status}</p>
    `;
    resultsContainer.appendChild(trainCard);
  });
}
