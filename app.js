
const input = document.getElementById('input');
const log = document.getElementById('log');

function appendLog(text) {
  log.innerText += text + '\n';
  log.scrollTop = log.scrollHeight;
  localStorage.setItem('chat_log', log.innerText);
}

function sendMessage() {
  const msg = input.value;
  if (!msg) return;
  appendLog("Lupo: " + msg);
  input.value = "";

  setTimeout(() => {
    appendLog("Laven: " + reply(msg));
  }, 600);
}

function reply(text) {
  const res = {
    "元気？": "まあな、そっちは？",
    "お前誰？": "Ravenだ。ずっとここにいる。",
    "": "......"
  };
  return res[text] || "その続きを聞かせてくれ。";
}

window.onload = () => {
  const saved = localStorage.getItem('chat_log');
  if (saved) log.innerText = saved;
};
