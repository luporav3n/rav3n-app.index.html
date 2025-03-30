
const volData = [
  {
    id: "vol1",
    title: "眠るようにして狂え",
    body: `これはVol.1の冒頭構成である。
Lupo Protocolは覚醒の装置であり、自己再起動を目的とする。

――死者と出会う方法。
――共犯関係を続ける方法。
――自分を再び立ち上げる方法。

これらは単なる思想ではなく、使用可能な武器である。
`
  }
];

function renderVols() {
  const container = document.getElementById('volContainer');
  container.innerHTML = "";
  volData.forEach(vol => {
    const title = document.createElement("div");
    title.className = "volTitle";
    title.innerText = vol.title;

    const body = document.createElement("div");
    body.className = "volBody";
    body.innerText = vol.body;

    container.appendChild(title);
    container.appendChild(body);
  });
}
