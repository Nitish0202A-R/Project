// Prices for each cabin class (example values in ₹)
const cabinPrices = {
  "Economy": 5000,
  "Premium Economy": 8000,
  "Business": 15000,
  "First Class": 25000
};

// Example flights with airline names (could be expanded or dynamic)
const flights = [
  "Air India",
  "IndiGo",
  "SpiceJet",
  "Vistara",
  "GoAir",
  "AirAsia",
  "TruJet"
];

// Form submission handling
document.getElementById('flightForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const from = document.getElementById('from').value.toUpperCase();
  const to = document.getElementById('to').value.toUpperCase();
  const departDate = document.getElementById('depart-date').value;
  const returnDate = document.getElementById('return-date').value;
  const travellers = parseInt(document.getElementById('travellers').value);
  const cabin = document.getElementById('cabin').value;

  if (!from || !to || !departDate || !travellers || !cabin) {
    alert("Please fill all required fields.");
    return;
  }

  // Select a flight (random from flights list)
  const flightName = flights[Math.floor(Math.random() * flights.length)];

  // Price per traveller for one-way
  const pricePerTraveller = cabinPrices[cabin] || 0;

  // Calculate total price:
  // If returnDate exists, assume return price is double (both ways)
  const isReturnTrip = returnDate && returnDate.trim() !== "";
  const totalAmount = pricePerTraveller * travellers * (isReturnTrip ? 2 : 1);

  // Show summary
  const results = document.getElementById('results');
  results.innerHTML = `
    <h3>Flight Search Summary:</h3>
    <p><strong>Flight:</strong> ${flightName}</p>
    <p><strong>From:</strong> ${from}</p>
    <p><strong>To:</strong> ${to}</p>
    <p><strong>Depart Date:</strong> ${departDate}</p>
    <p><strong>Return Date:</strong> ${isReturnTrip ? returnDate : "One Way"}</p>
    <p><strong>Travellers:</strong> ${travellers}</p>
    <p><strong>Cabin Class:</strong> ${cabin}</p>
    <p><strong>Total Amount:</strong> ₹${totalAmount.toLocaleString()}</p>
    <button onclick="openModal()">Proceed to Payment</button>
  `;

  // Store current booking details globally
  window.currentBooking = {
    flightName,
    from,
    to,
    departDate,
    returnDate: isReturnTrip ? returnDate : null,
    travellers,
    cabin,
    totalAmount
  };

  window.currentTotalAmount = totalAmount;
});

// Modal handling
function openModal() {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "flex";
  modal.classList.remove("hidden");
  document.getElementById("paymentDetails").innerHTML = "";
}

function closeModal() {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "none";
  modal.classList.add("hidden");
}

// Payment Options
function showUPI() {
  document.getElementById("paymentDetails").innerHTML = `
    <h3>Pay via UPI</h3>
    <p>Enter UPI ID: <input type="text" placeholder="example@upi" /></p>
    <button onclick="confirmPayment()">Pay Now</button>
  `;
}

function showCard() {
  document.getElementById("paymentDetails").innerHTML = `
    <h3>Pay via Card</h3>
    <p>Card Number: <input type="text" maxlength="16" placeholder="1234 5678 9012 3456" /></p>
    <p>Expiry: <input type="month" /></p>
    <p>CVV: <input type="password" maxlength="3" /></p>
    <button onclick="confirmPayment()">Pay Now</button>
  `;
}

function showNetBanking() {
  document.getElementById("paymentDetails").innerHTML = `
    <h3>Pay via Internet Banking</h3>
    <select>
      <option value="">Select Bank</option>
      <option value="SBI">SBI</option>
      <option value="HDFC">HDFC</option>
      <option value="ICICI">ICICI</option>
      <option value="Axis">Axis Bank</option>
    </select>
    <br/><br/>
    <button onclick="confirmPayment()">Pay Now</button>
  `;
}

function showQR() {
  document.getElementById("paymentDetails").innerHTML = `
    <h3>Scan QR to Pay</h3>
    <img src="img.html/QR.jpg" alt="QR Code" style="width:150px; height:auto;" />
    <p>Scan using any UPI app</p>
  `;
}


// Confirm payment function
function confirmPayment() {
  alert(`Payment successful! Your flight (${window.currentBooking.flightName}) has been booked.\nTotal Paid: ₹${window.currentTotalAmount.toLocaleString()}`);
  closeModal();
}
