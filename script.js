// Hide Splash After 1.5 sec
window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
  }, 1500);
};

// Toggle Nav Expand/Collapse
function toggleNav() {
  document.getElementById("side-nav").classList.toggle("expanded");
}

// Show Specific Section
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "flex";
}


// Time Update
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById("time").textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();

// Weather Update (Static for now, API later)
function updateWeather(temp = "28°C", icon = "☁️") {
  document.getElementById("weather").textContent = `${icon} ${temp}`;
}
updateWeather();
