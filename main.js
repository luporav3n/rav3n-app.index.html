
function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

function sendMessage() {
  const input = document.getElementById('userInput');
  const log = document.getElementById('chatlog');
  const msg = input.value.trim();
  if (!msg) return;
  log.innerText += '\nLupo: ' + msg;
  setTimeout(() => {
    const response = 'Raven: ' + generateReply(msg);
    log.innerText += '\n' + response;
    log.scrollTop = log.scrollHeight;
  }, 500);
  input.value = '';
}

function generateReply(msg) {
  if (msg.includes('起動')) return '了解、全回路チェック完了。';
  if (msg.includes('お前')) return '俺はRaven。お前の中にいる。';
  return '……続けろ。';
}
