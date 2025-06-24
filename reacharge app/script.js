 function switchTab(tabId, element) {
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));
      element.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }

    function recharge(type) {
      if (type === 'mobile') {
        const number = document.getElementById('mobileNumber').value;
        const operator = document.getElementById('mobileOperator').value;
        const amount = document.getElementById('mobileAmount').value;
        if (number && operator && amount) {
          alert(`✅ Mobile Recharge Successful!\nNumber: ${number}\nOperator: ${operator}\nAmount: ₹${amount}`);
        } else {
          alert("⚠️ Please fill all mobile recharge fields.");
        }
      } else {
        const id = document.getElementById('dthId').value;
        const operator = document.getElementById('dthOperator').value;
        const amount = document.getElementById('dthAmount').value;
        if (id && operator && amount) {
          alert(`✅ DTH Recharge Successful!\nID: ${id}\nOperator: ${operator}\nAmount: ₹${amount}`);
        } else {
          alert("⚠️ Please fill all DTH recharge fields.");
        }
      }
    }

    function showOffers() {
      const operator = document.getElementById('mobileOperator').value;
      let offers = "📢 Mobile Recharge Offers:\n\n";

      switch (operator) {
        case "Airtel":
          offers += "- ₹20 OFF on recharge above ₹249\n- 1GB extra data on ₹299 plan";
          break;
        case "Jio":
          offers += "- ₹10 Cashback on PhonePe\n- Extra 7 Days Validity on ₹399";
          break;
        case "Vi":
          offers += "- Weekend Data Rollover on all plans\n- ₹30 OFF via VI app";
          break;
        case "BSNL":
          offers += "- 10% Discount for new users\n- Free Caller Tune for 30 Days";
          break;
        default:
          offers += "- Please select an operator to view offers.";
      }

      alert(offers);
    }