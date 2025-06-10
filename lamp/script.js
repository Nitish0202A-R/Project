let isOn = false;

function toggleLamp() {
  const lampLight = document.getElementById("lampLight");
  const button = document.getElementById("lampSwitch");

  if (isOn) {
    lampLight.style.opacity = 0;
    button.textContent = "Turn On";
  } else {
    lampLight.style.opacity = 0.6;
    button.textContent = "Turn Off";
  }

  isOn = !isOn;
}
