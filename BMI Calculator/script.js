function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

      if (!weight || !height) {
        document.getElementById("result").innerText = "Please enter valid values.";
        return;
      }

      const bmi = (weight / (height * height)).toFixed(2);

      let message = "";
      if (bmi < 18.5) message = "Underweight";
      else if (bmi >= 18.5 && bmi < 24.9) message = "Normal weight";
      else if (bmi >= 25 && bmi < 29.9) message = "Overweight";
      else message = "Obese";

      document.getElementById("result").innerText = `Your BMI is ${bmi} (${message})`;
    }