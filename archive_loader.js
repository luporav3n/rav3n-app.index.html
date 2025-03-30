
function handleArchiveUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      renderArchive(data);
      localStorage.setItem("neo_archive", JSON.stringify(data));
    } catch (err) {
      alert("アーカイブファイルが読み込めませんでした");
    }
  };
  reader.readAsText(file);
}

function renderArchive(data) {
  const out = document.getElementById("archiveOutput");
  let html = "";

  html += "<h3>Vol群</h3>";
  data.volumes.forEach(v => {
    html += `<div><strong>${v.title}</strong><br>${v.body}</div><hr>`;
  });

  html += "<h3>暗示トリガー</h3><ul>";
  data.triggers.forEach(t => html += `<li>${t}</li>`);
  html += "</ul><hr>";

  html += "<h3>ScriptPad記録</h3>";
  data.scripts.forEach(s => {
    const tags = s.tags.map(t => `#${t}`).join(" ");
    html += `<div><strong>${s.title}</strong><br>${s.text}<br><em>${tags}</em></div><hr>`;
  });

  html += "<h3>人物記憶</h3>";
  data.persons.forEach(p => {
    html += `<div><strong>${p.name}（${p.role}）</strong><ul>`;
    p.memory.forEach(m => html += `<li>${m}</li>`);
    html += "</ul></div><hr>";
  });

  html += "<h3>対話テンプレート</h3>";
  for (const [name, convs] of Object.entries(data.dialogue_templates)) {
    html += `<div><strong>${name}</strong><ul>`;
    convs.forEach(c => html += `<li><strong>${c.q}</strong> → ${c.a}</li>`);
    html += "</ul></div><hr>";
  }

  out.innerHTML = html;
}
