
function applySettings() {
  const username = localStorage.getItem("username") || "Lupo";
  const theme = localStorage.getItem("theme") || "dark";
  document.body.className = theme;
  document.getElementById("usernameDisplay").innerText = username;
}

function saveSettings() {
  const name = document.getElementById("usernameInput").value.trim();
  const theme = document.querySelector('input[name="theme"]:checked').value;
  if (name) localStorage.setItem("username", name);
  localStorage.setItem("theme", theme);
  applySettings();
}

window.onload = () => {
  renderTriggers();
  renderVols();
  renderPersons();
  applySettings();
};
