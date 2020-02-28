const jsBlock = document.querySelector(".block__js");
const jsBlockChild = jsBlock.firstElementChild;

const blockCoordinates = {
  x: jsBlock.offsetWidth,
  y: jsBlock.offsetHeight
};

jsBlockChild.style.cssText = `position: absolute; top: ${blockCoordinates.x /
  2 /
  2}px; left: ${blockCoordinates.y / 2 / 2}px;`;

// or
// jsBlock.style.cssText = `display: flex;
// justify-content: center;
// align-items: center;`;
