 const needle = document.getElementById("needle");
    const speedDisplay = document.getElementById("speedDisplay");
    const speedInput = document.getElementById("speedInput");

    speedInput.addEventListener("input", function () {
      const speed = parseInt(this.value);
      const angle = (speed / 180) * 180 - 90; // convert to -90 to +90 degrees
      needle.style.transform = `rotate(${angle}deg)`;
      speedDisplay.innerText = `Speed: ${speed} km/h`;
    });