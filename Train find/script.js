const trains = [
  {
    name: "Swatantrata Senani Express",
    trainNumber: "12561",
    from: "Chapra",
    to: "New Delhi",
    departureTime: "12:35 AM",
    status: "On Time",
    fare: "₹850"
  },
  {
    name: "Sanghamita SF Express",
    trainNumber: "12296",
    from: "Danapur",
    to: "SMVT Bengaluru",
    departureTime: "08:25 PM",
    status: "Delayed",
    fare: "₹1250"
  },
  {
    name: "Bagh Express (CPR-HWH)",
    trainNumber: "13020",
    from: "Chapra",
    to: "Howrah Junction",
    departureTime: "05:15 PM",
    status: "On Time",
    fare: "₹650"
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
      <p><strong>Time:</strong> ${train.departureTime}</p>
      <p><strong>Status:</strong> ${train.status}</p>
      <p><strong>Fare:</strong> ${train.fare}</p>
      <button class="book-btn">Book</button>
      <div class="payment-form-container" style="display:none;">
        <form class="payment-form">
          <label>
            Select Payment Method:
            <select name="paymentMethod" required>
              <option value="">--Choose--</option>
              <option value="debit">Debit Card</option>
              <option value="credit">Credit Card</option>
              <option value="upi">UPI</option>
              <option value="internet">Internet Banking</option>
            </select>
          </label>

          <div class="card-details" style="display:none;">
            <label>Card Number:
              <input type="text" name="cardNumber" maxlength="16" pattern="\\d{16}" placeholder="16 digit card number"/>
            </label><br><br>
            <label>Name on Card:
              <input type="text" name="cardName" placeholder="Name as on card"/>
            </label><br><br>
            <label>Expiry Date:
              <input type="month" name="expiryDate"/>
            </label><br><br>
            <label>CVV:
              <input type="password" name="cvv" maxlength="3" pattern="\\d{3}" placeholder="3 digit CVV"/>
            </label><br><br>
          </div>

          <div class="upi-details" style="display:none;">
            <label>UPI ID:
              <input type="text" name="upiId" placeholder="example@bank"/>
            </label><br><br>
          </div>

          <div class="internet-banking-details" style="display:none;">
            <label>Select Bank:
              <select name="bankName" required>
                <option value="">--Select Bank--</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="State Bank of India">State Bank of India</option>
                <option value="Axis Bank">Axis Bank</option>
                <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Yes Bank">Yes Bank</option>
              </select>
            </label><br><br>
          </div>

          <button type="submit">Pay & Confirm Booking</button>
          <button type="button" class="cancel-btn">Cancel</button>
        </form>
      </div>
    `;

    const bookBtn = trainCard.querySelector('.book-btn');
    const paymentFormContainer = trainCard.querySelector('.payment-form-container');
    const paymentForm = trainCard.querySelector('.payment-form');
    const paymentMethodSelect = paymentForm.querySelector('select[name="paymentMethod"]');

    const cardDetailsDiv = paymentForm.querySelector('.card-details');
    const upiDetailsDiv = paymentForm.querySelector('.upi-details');
    const internetDetailsDiv = paymentForm.querySelector('.internet-banking-details');

    bookBtn.addEventListener('click', () => {
      paymentFormContainer.style.display = 'block';
      paymentFormContainer.scrollIntoView({ behavior: 'smooth' });

      paymentForm.reset();

      paymentMethodSelect.value = 'debit';
      paymentMethodSelect.dispatchEvent(new Event('change'));
    });

    paymentMethodSelect.addEventListener('change', () => {
      const method = paymentMethodSelect.value;

      cardDetailsDiv.style.display = 'none';
      upiDetailsDiv.style.display = 'none';
      internetDetailsDiv.style.display = 'none';

      paymentForm.querySelector('[name="cardNumber"]').required = false;
      paymentForm.querySelector('[name="cardName"]').required = false;
      paymentForm.querySelector('[name="expiryDate"]').required = false;
      paymentForm.querySelector('[name="cvv"]').required = false;
      paymentForm.querySelector('[name="upiId"]').required = false;
      paymentForm.querySelector('[name="bankName"]').required = false;

      if (method === 'debit' || method === 'credit') {
        cardDetailsDiv.style.display = 'block';
        paymentForm.querySelector('[name="cardNumber"]').required = true;
        paymentForm.querySelector('[name="cardName"]').required = true;
        paymentForm.querySelector('[name="expiryDate"]').required = true;
        paymentForm.querySelector('[name="cvv"]').required = true;
      } else if (method === 'upi') {
        upiDetailsDiv.style.display = 'block';
        paymentForm.querySelector('[name="upiId"]').required = true;
      } else if (method === 'internet') {
        internetDetailsDiv.style.display = 'block';
        paymentForm.querySelector('[name="bankName"]').required = true;
      }
    });

    paymentForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(paymentForm);
      const method = formData.get('paymentMethod');

      let paymentInfo = '';
      if (method === 'debit' || method === 'credit') {
        paymentInfo = `Payment Method: ${method === 'debit' ? 'Debit Card' : 'Credit Card'}\n` +
          `Card Holder: ${formData.get('cardName')}\n` +
          `Card Number: **** **** **** ${formData.get('cardNumber').slice(-4)}`;
      } else if (method === 'upi') {
        paymentInfo = `Payment Method: UPI\nUPI ID: ${formData.get('upiId')}`;
      } else if (method === 'internet') {
        paymentInfo = `Payment Method: Internet Banking\nBank Name: ${formData.get('bankName')}`;
      }

      alert(`Booking confirmed for ${train.name} (${train.trainNumber}) from ${train.from} to ${train.to}.\n` +
        paymentInfo + `\nFare: ${train.fare}`);

      paymentForm.reset();
      paymentFormContainer.style.display = 'none';
      cardDetailsDiv.style.display = 'none';
      upiDetailsDiv.style.display = 'none';
      internetDetailsDiv.style.display = 'none';
    });

    const cancelBtn = trainCard.querySelector('.cancel-btn');
    cancelBtn.addEventListener('click', () => {
      paymentForm.reset();
      paymentFormContainer.style.display = 'none';
      cardDetailsDiv.style.display = 'none';
      upiDetailsDiv.style.display = 'none';
      internetDetailsDiv.style.display = 'none';
    });

    resultsContainer.appendChild(trainCard);
  });
}



