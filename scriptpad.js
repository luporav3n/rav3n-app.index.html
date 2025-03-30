
function renderScriptPad() {
  const list = document.getElementById("scriptList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  list.innerHTML = "";
  stored.forEach((s, i) => {
    const block = document.createElement("div");
    block.className = "scriptBlock";
    block.innerHTML = `<div class='scriptTitle'>${s.title}</div>
                       <div class='scriptBody'>${s.text}</div>
                       <button onclick="deleteScript(${i})">削除</button>`;
    list.appendChild(block);
  });
}

function saveScript() {
  const title = document.getElementById("scriptTitle").value.trim();
  const text = document.getElementById("scriptText").value.trim();
  if (!title || !text) return;
  let scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
  scripts.unshift({ title, text });
  localStorage.setItem("scripts", JSON.stringify(scripts));
  document.getElementById("scriptTitle").value = "";
  document.getElementById("scriptText").value = "";
  renderScriptPad();
}

function deleteScript(index) {
  let scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
  scripts.splice(index, 1);
  localStorage.setItem("scripts", JSON.stringify(scripts));
  renderScriptPad();
}

window.onload = () => {
  renderTriggers?.();
  renderVols?.();
  renderPersons?.();
  applySettings?.();
  renderScriptPad();
};
