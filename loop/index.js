const generate = document.querySelector(".generate");
const blocks = document.querySelector(".blocks");

const containerGenerator = () => {
  const r = randomInteger(0, 256);
  const g = randomInteger(0, 256);
  const b = randomInteger(0, 256);
  const bgColor = `rgb(${r},${g},${b})`;
  const container = document.createElement("div");
  container.classList.add("container");
  container.style.backgroundColor = bgColor;
  blocks.appendChild(container);
};

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

generate.addEventListener("click", () => {
  const numberOfBlocks = randomInteger(10, 100);
  if (blocks.firstChild) {
    while (blocks.firstChild) {
      blocks.removeChild(blocks.firstChild);
    }
  }
  for (let i = 0; i < numberOfBlocks; i++) {
    containerGenerator();
  }
});
