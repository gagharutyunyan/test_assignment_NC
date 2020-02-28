const addElement = document.querySelector(".add__element");
const blocks = document.querySelector(".blocks");
const arrayOfBlocks = [
  { attribute: "div", bgColor: "red", className: "block" },
  { attribute: "div", bgColor: "green", className: "block" },
  { attribute: "div", bgColor: "blue", className: "block" }
];

const blockCreator = (attribute, bgColor, className) => {
  const block = document.createElement(attribute);
  block.classList.add(className);
  block.style.backgroundColor = bgColor;
  blocks.appendChild(block);
};

const blockRender = (blocks, time) => {
  blocks.map((block, i) => {
    setTimeout(() => {
      blockCreator(block.attribute, block.bgColor, block.className);
    }, time * i);
  });
};

addElement.addEventListener("click", () => {
  if (!blocks.firstChild) {
    blockRender(arrayOfBlocks, 300);
  } else {
    while (blocks.firstChild) {
      blocks.removeChild(blocks.firstChild);
    }
  }
});
