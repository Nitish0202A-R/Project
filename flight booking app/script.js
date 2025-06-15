document.getElementById("flightForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value.toUpperCase();
  const to = document.getElementById("to").value.toUpperCase();
  const date = document.getElementById("date").value;

 const flights = [
  { airline: "Air India", time: "10:00 AM", price: "₹6500" },
  { airline: "IndiGo", time: "2:00 PM", price: "₹8900" },
  { airline: "SpiceJet", time: "6:00 PM", price: "₹5500" },
  { airline: "Vistara", time: "8:00 AM", price: "₹7200" },
  { airline: "GoAir", time: "12:00 PM", price: "₹4800" },
  { airline: "AirAsia", time: "4:00 PM", price: "₹5200" },
  { airline: "TruJet", time: "9:00 PM", price: "₹4500" }
];


  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<h3>Flights on ${date}</h3>`;
  flights.forEach((flight, index) => {
    resultsDiv.innerHTML += `
      <div class="flight-card">
        <strong>${flight.airline}</strong><br>
        From: ${from} → ${to}<br>
        Time: ${flight.time}<br>
        Price: ${flight.price}<br>
        <button onclick="openModal()">Book Now</button>
      </div>
    `;
  });
});

function openModal() {
  document.getElementById("paymentModal").style.display = "block";
  document.getElementById("paymentDetails").innerHTML = "";
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
}

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
    <p>Card Number: <input type="text" maxlength="16" /></p>
    <p>Expiry: <input type="month" /></p>
    <p>CVV: <input type="password" maxlength="3" /></p>
    <button onclick="confirmPayment()">Pay Now</button>
  `;
}

function showNetBanking() {
  document.getElementById("paymentDetails").innerHTML = `
    <h3>Pay via Internet Banking</h3>
    <select>
      <option>SBI</option>
      <option>HDFC</option>
      <option>ICICI</option>
      <option>Axis</option>
    </select><br><br>
    <button onclick="confirmPayment()">Pay Now</button>
  `;
}

function showQR() {
  document.getElementById("paymentDetails").innerHTML = `
    <h3>Scan QR to Pay</h3>
    <img src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay&size=200x200" alt="QR Code">
    <p>Scan using any UPI app</p>
  `;
}

function confirmPayment() {
  alert("Payment successful! Your flight has been booked.");
  closeModal();
}
