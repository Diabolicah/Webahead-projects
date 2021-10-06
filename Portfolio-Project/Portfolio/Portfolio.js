function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function moveGeoObj() {
  let objStorage = document.getElementById("geoObjStorage");
  while (true) {
    let element = document.createElement("div");
    element.className = "geoObj";
    objStorage.appendChild(element);
    element.style.top =
      (Math.random() * document.documentElement.clientHeight).toString() + "px";
    element.style.left =
      (Math.random() * document.documentElement.clientWidth).toString() + "px";
    element.style.borderRadius = Math.random() * 100 + "%";
    setTimeout(() => element.remove(), 10000);
    await sleep(1000);
  }
}

class Block {
  constructor(element) {
    this.element = element;
    this.defaultHeight = element.offsetHeight;
    this.defaultWidth = element.offsetWidth;
    this.defaultLeft = element.offsetLeft;
    this.defaultTop = element.offsetTop;
    this.animationSpeed = 2;
  }

  get isOpen() {
    return (
      this.defaultHeight - this.element.offsetHeight !== 0 ||
      this.defaultWidth - this.element.offsetWidth !== 0
    );
  }

  closeBlock() {
    let timer = null;
    let tempSizeX = this.element.offsetWidth,
      tempSizeY = this.element.offsetHeight;
    clearInterval(timer);
    let scaleSpeedX =
      tempSizeX - this.defaultWidth > tempSizeY - this.defaultHeight
        ? (tempSizeX - this.defaultWidth) / (tempSizeY - this.defaultHeight)
        : 1;
    let scaleSpeedY =
      tempSizeY - this.defaultHeight > tempSizeX - this.defaultWidth
        ? (tempSizeY - this.defaultHeight) / (tempSizeX - this.defaultWidth)
        : 1;
    scaleSpeedX =
      (scaleSpeedX / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    scaleSpeedY =
      (scaleSpeedY / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    timer = setInterval(() => {
      if (tempSizeX <= this.defaultWidth && tempSizeY <= this.defaultHeight)
        clearInterval(timer);
      else {
        if (tempSizeX > this.defaultWidth) {
          tempSizeX -= scaleSpeedX;
          this.element.style.width = tempSizeX + "px";
        }
        if (tempSizeY > this.defaultHeight) {
          tempSizeY -= scaleSpeedY;
          this.element.style.height = tempSizeY + "px";
        }
      }
    }, 5);
  }

  openBlock(X, Y = 1) {
    let timer = null;
    let tempSizeX = this.element.offsetWidth,
      tempSizeY = this.element.offsetHeight;
    clearInterval(timer);
    let scaleSpeedX =
      X - tempSizeX > Y - tempSizeY ? (X - tempSizeX) / (Y - tempSizeY) : 1;
    let scaleSpeedY =
      Y - tempSizeY > X - tempSizeX ? (Y - tempSizeY) / (X - tempSizeX) : 1;
    scaleSpeedX =
      (scaleSpeedX / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    scaleSpeedY =
      (scaleSpeedY / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    timer = setInterval(() => {
      if (tempSizeX >= Math.floor(X) && tempSizeY >= Math.floor(Y))
        clearInterval(timer);
      else {
        if (tempSizeX < X) {
          tempSizeX += scaleSpeedX;
          this.element.style.width = tempSizeX + "px";
        }
        if (tempSizeY < Y) {
          tempSizeY += scaleSpeedY;
          this.element.style.height = tempSizeY + "px";
        }
      }
    }, 5);
  }

  slideBlock(X, Y) {
    let timer = null;
    let tempPosX = this.element.offsetLeft,
      tempPosY = this.element.offsetTop;
    clearInterval(timer);
    let scaleSpeedX =
      X - tempPosX > Y - tempPosY ? (X - tempPosX) / (Y - tempPosY) : 1;
    let scaleSpeedY =
      Y - tempPosY > X - tempPosX ? (Y - tempPosY) / (X - tempPosX) : 1;
    scaleSpeedX =
      (scaleSpeedX / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    scaleSpeedY =
      (scaleSpeedY / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    timer = setInterval(() => {
      if (tempPosX >= Math.floor(X) && tempPosY >= Math.floor(Y))
        clearInterval(timer);
      else {
        if (tempPosX < X) {
          tempPosX += scaleSpeedX;
          this.element.style.left = tempPosX + "px";
        }
        if (tempPosY < Y) {
          tempPosY += scaleSpeedY;
          this.element.style.top = tempPosY + "px";
        }
      }
    }, 5);
  }

  slideBlockHome() {
    let timer = null;
    let tempPosX = this.element.offsetLeft,
      tempPosY = this.element.offsetTop;
    clearInterval(timer);
    let scaleSpeedX =
      tempPosX - this.defaultLeft > tempPosY - this.defaultTop
        ? (tempPosX - this.defaultLeft) / (tempPosY - this.defaultTop)
        : 1;
    let scaleSpeedY =
      tempPosY - this.defaultTop > tempPosX - this.defaultLeft
        ? (tempPosY - this.defaultTop) / (tempPosX - this.defaultLeft)
        : 1;
    scaleSpeedX =
      (scaleSpeedX / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    scaleSpeedY =
      (scaleSpeedY / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    timer = setInterval(() => {
      if (tempPosX <= this.defaultLeft && tempPosY <= this.defaultTop)
        clearInterval(timer);
      else {
        if (tempPosX > this.defaultLeft) {
          tempPosX -= scaleSpeedX;
          this.element.style.left = tempPosX + "px";
        }
        if (tempPosY > this.defaultTop) {
          tempPosY -= scaleSpeedY;
          this.element.style.top = tempPosY + "px";
        }
      }
    }, 5);
  }
}

let masonryStorage = document.getElementById("masonryStorage");
let tempDiv = document.createElement("div");
tempDiv.style.width = "20px";
tempDiv.style.height = "20px";
tempDiv.className = "masonry-block";
masonryStorage.appendChild(tempDiv);

let tempDivBlock = new Block(tempDiv);
tempDivBlock.openBlock(masonryStorage.clientWidth / 3,masonryStorage.clientHeight / 2);
async function test() {
  await sleep(5000);
  tempDivBlock.closeBlock();
  tempDivBlock.slideBlock(tempDiv.clientLeft + masonryStorage.clientWidth / 3, tempDiv.clientLeft + 150);
  await sleep(5000)
  tempDivBlock.slideBlockHome()
}
test();
console.log(tempDiv, tempDivBlock);

moveGeoObj();
