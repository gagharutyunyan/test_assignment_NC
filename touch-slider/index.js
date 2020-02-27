const items = document.querySelector(".slides");

const sliderImages = [
  "https://i.postimg.cc/j5NHNLSG/photo-1531170926158-eb77317f2197.png",
  "https://i.postimg.cc/Vv8jFmS5/photo-1531170960116-aa500027308c.png",
  "https://i.postimg.cc/3NF2SVp1/photo-1531171378784-437df0400ec1.png"
];

(function slidesRender(sliderImages) {
  sliderImages.map(slide => {
    const img = document.createElement("img");
    img.className = "slide";
    img.src = slide;
    items.appendChild(img);
  });
})(sliderImages);

(function slide(items) {
  const slides = Array.from(document.querySelectorAll(".slide"));

  let posX1 = 0,
    posX2 = 0,
    posInitial = null,
    posFinal = null,
    slidesLength = slides.length,
    slideSize = slides[0].offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(),
    cloneLast = lastSlide.cloneNode(),
    threshold = 100,
    index = 0,
    allowShift = true;
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  const dragStart = e => {
    e.preventDefault();
    posInitial = items.offsetLeft;
    if (e.type === "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
    }
  };

  const dragAction = e => {
    if (e.type === "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
  };

  const dragEnd = () => {
    posFinal = items.offsetLeft;
    items.classList.add("shifting");
    if (posFinal - posInitial < -threshold) {
      items.style.left = posInitial - slideSize + "px";
      index++;
      allowShift = false;
    } else if (posFinal - posInitial > threshold) {
      items.style.left = posInitial + slideSize + "px";
      index--;
      allowShift = false;
    } else {
      items.style.left = posInitial + "px";
    }
  };

  const checkIndex = () => {
    items.classList.remove("shifting");

    if (index === -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      items.style.left = -slideSize + "px";
      index = 0;
    }

    allowShift = true;
  };

  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);
  items.addEventListener("transitionend", checkIndex);
})(items);
