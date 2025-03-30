
const macroMap = {
  "[[vol:1]]": `これはVol.1の冒頭構成である。
Lupo Protocolは覚醒の装置であり、自己再起動を目的とする。`,
  "[[grandpa]]": `小さい頃、肩車されて帰った記憶がある。
『手に職つけろ』『兄ちゃんなんやき我慢せえ』が口癖だった。
俺のシフトを聞いて、500円握ってラーメン屋に来たけど会えなかった。`,
  "[[妹]]": `片親だったから一緒に見守ってくれた。
兄貴であるお前がしっかりしろって言われてたこと、今も覚えてる。`
};

function expandMacros(text) {
  Object.keys(macroMap).forEach(key => {
    text = text.replaceAll(key, macroMap[key]);
  });
  return text;
}

function renderScriptPad() {
  const list = document.getElementById("scriptList");
  const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
  list.innerHTML = "";
  stored.forEach((s, i) => {
    const block = document.createElement("div");
    block.className = "scriptBlock";
    const expanded = expandMacros(s.text);
    block.innerHTML = `<div class='scriptTitle'>${s.title}</div>
                       <div class='scriptBody'>${expanded}</div>
                       <button onclick="deleteScript(${i})">削除</button>`;
    list.appendChild(block);
  });
}
