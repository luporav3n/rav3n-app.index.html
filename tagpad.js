
function renderScriptPad() {
  const list = document.getElementById("scriptList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  list.innerHTML = "";
  stored.forEach((s, i) => {
    const block = document.createElement("div");
    block.className = "scriptBlock";
    const expanded = expandMacros(s.text);
    const tagLinks = s.tags.map(tag => `<span class='tag' onclick="filterByTag('${tag}')">#${tag}</span>`).join(" ");
    block.innerHTML = `<div class='scriptTitle'>${s.title}</div>
                       <div class='scriptBody'>${expanded}</div>
                       <div>${tagLinks}</div>
                       <button onclick="deleteScript(${i})">削除</button>`;
    list.appendChild(block);
  });
  renderTagList();
}

function saveScript() {
  const title = document.getElementById("scriptTitle").value.trim();
  const text = document.getElementById("scriptText").value.trim();
  const tags = document.getElementById("scriptTags").value.trim().split(/\s+/).filter(Boolean);
  if (!title || !text) return;
  let scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
  scripts.unshift({ title, text, tags });
  localStorage.setItem("scripts", JSON.stringify(scripts));
  document.getElementById("scriptTitle").value = "";
  document.getElementById("scriptText").value = "";
  document.getElementById("scriptTags").value = "";
  renderScriptPad();
}

function deleteScript(index) {
  let scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
  scripts.splice(index, 1);
  localStorage.setItem("scripts", JSON.stringify(scripts));
  renderScriptPad();
}

function filterByTag(tag) {
  const list = document.getElementById("scriptList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  const filtered = stored.filter(s => s.tags.includes(tag));
  list.innerHTML = "";
  filtered.forEach((s, i) => {
    const block = document.createElement("div");
    block.className = "scriptBlock";
    const expanded = expandMacros(s.text);
    const tagLinks = s.tags.map(t => `<span class='tag' onclick="filterByTag('${t}')">#${t}</span>`).join(" ");
    block.innerHTML = `<div class='scriptTitle'>${s.title}</div>
                       <div class='scriptBody'>${expanded}</div>
                       <div>${tagLinks}</div>
                       <button onclick="deleteScript(${i})">削除</button>`;
    list.appendChild(block);
  });
}

function renderTagList() {
  const container = document.getElementById("tagList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  const tagSet = new Set();
  stored.forEach(s => s.tags.forEach(tag => tagSet.add(tag)));
  container.innerHTML = "<strong>感情タグ：</strong> " + Array.from(tagSet).map(tag =>
    `<span class='tag' onclick="filterByTag('${tag}')">#${tag}</span>`).join(" ");
}

window.onload = () => {
  renderTriggers?.();
  renderVols?.();
  renderPersons?.();
  applySettings?.();
  renderScriptPad();
};
