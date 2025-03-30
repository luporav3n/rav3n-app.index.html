
document.addEventListener('DOMContentLoaded', () => {
  const log = document.getElementById('log');
  const input = document.getElementById('userInput');

  // 起動時演出
  setTimeout(() => {
    document.querySelector('header').innerText = "よう、Lupo。話す準備はできてる。";
    restoreLog();
  }, 1000);

  window.sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;
    appendLog("Lupo", text);
    setTimeout(() => {
      appendLog("Raven", reply(text));
    }, 600);
    input.value = "";
  };

  function appendLog(sender, msg) {
    const line = `${sender}：${msg}\n`;
    log.textContent += line;
    localStorage.setItem('raven_log', log.textContent);
    log.scrollTop = log.scrollHeight;
  }

  function restoreLog() {
    const saved = localStorage.getItem('raven_log');
    if (saved) log.textContent = saved;
  }

  function reply(text) {
    return "…" + ["それで？", "考えは？", "面白いな", "他には？", "なるほど"][Math.floor(Math.random()*5)];
  }
});
