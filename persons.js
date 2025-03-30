
const persons = [
  {
    name: "武田 毅",
    role: "祖父",
    memory: [
      "小さい頃、肩車されて帰った記憶がある。",
      "『手に職つけろ』『兄ちゃんなんやき我慢せえ』が口癖だった。",
      "俺のシフトを聞いて、500円握ってラーメン屋に来たけど会えなかった。",
      "大志君には本当に感謝しちょーき、よーお前を守ってくれた…と畑で言ってたらしい。"
    ]
  },
  {
    name: "妹",
    role: "家族",
    memory: [
      "片親だったから一緒に見守ってくれた。",
      "兄貴であるお前がしっかりしろって言われてたこと、今も覚えてる。"
    ]
  },
  {
    name: "親父（再婚）",
    role: "父親代わり",
    memory: [
      "新聞配達の帰りにじいちゃんとよく畑で話してた。",
      "じいちゃんから『感謝しちょー』って言葉を受け取った大事な人。"
    ]
  }
];

function renderPersons() {
  const container = document.getElementById('personContainer');
  container.innerHTML = "";
  persons.forEach(p => {
    const title = document.createElement("div");
    title.className = "personTitle";
    title.innerText = `${p.name}（${p.role}）`;

    const memories = document.createElement("div");
    p.memory.forEach(mem => {
      const div = document.createElement("div");
      div.className = "memoryBlock";
      div.innerText = mem;
      memories.appendChild(div);
    });

    container.appendChild(title);
    container.appendChild(memories);
  });
}

window.onload = () => {
  renderTriggers();
  renderVols();
  renderPersons();
};
