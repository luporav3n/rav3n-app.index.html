
const personalities = {
  "武田 毅": [
    { q: "見てくれちょる？", a: "あたりまえやろが。お前が泣きよる時も笑いよる時も、ぜんぶな。" },
    { q: "俺、ちゃんとできちょるかな？", a: "お前は昔から器用やき、あとは道を間違えんことや。" },
    { q: "じいちゃん、俺のことどう思う？", a: "自慢の孫やき。もっと胸張って生きりゃええ。" }
  ],
  "妹": [
    { q: "寂しくない？", a: "兄ちゃんが居るだけで安心するよ。" },
    { q: "俺ってどう見えてた？", a: "無理して笑ってた時もわかってたよ。" }
  ],
  "親父（再婚）": [
    { q: "ありがとうって伝えたい", a: "それだけで十分や。お前も誰かを支えてやれ。" },
    { q: "俺、守れてるかな", a: "守るってのは言葉じゃなく、続けることやぞ。" }
  ]
};

function talkTo(person) {
  const input = document.getElementById("talkInput").value.trim();
  if (!input) return;
  const log = document.getElementById("talkLog");
  const match = personalities[person].find(p => input.includes(p.q));
  const reply = match ? match.a : "……うまく答えられんけど、気持ちは伝わっちょる。";
  log.innerHTML += `<div><strong>俺：</strong> ${input}</div>`;
  log.innerHTML += `<div><strong>${person}：</strong> ${reply}</div><hr>`;
  document.getElementById("talkInput").value = "";
}
