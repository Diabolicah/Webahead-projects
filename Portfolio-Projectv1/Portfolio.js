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
    this.sizeTimer = null;
    this.slideTimer = null;
  }

  get isOpen() {
    return (
      this.defaultHeight - this.element.offsetHeight !== 0 ||
      this.defaultWidth - this.element.offsetWidth !== 0
    );
  }

  closeBlock() {
    clearInterval(this.sizeTimer);
    personalInfoDiv.children[1].style.opacity = 0;
    this.element.children[2].style["z-index"] = 1;

    let tempSizeX = this.element.offsetWidth,
      tempSizeY = this.element.offsetHeight;
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
      this.sizeTimer = setInterval(() => {
      if (tempSizeX <= this.defaultWidth && tempSizeY <= this.defaultHeight){
        clearInterval(this.sizeTimer);
        this.element.style.width = (this.element.offsetWidth/this.element.parentElement.offsetWidth) * 100 + "%"
        this.element.style.height = (this.element.offsetHeight/this.element.parentElement.offsetHeight) * 100 + "%"
      }
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
    clearInterval(this.sizeTimer);
    this.element.children[1].style.opacity = 1;
    this.element.children[2].style["z-index"] = -2;
    let tempSizeX = this.element.offsetWidth,
      tempSizeY = this.element.offsetHeight;
    let scaleSpeedX =
      X - tempSizeX > Y - tempSizeY ? (X - tempSizeX) / (Y - tempSizeY) : 1;
    let scaleSpeedY =
      Y - tempSizeY > X - tempSizeX ? (Y - tempSizeY) / (X - tempSizeX) : 1;
    scaleSpeedX =
      (scaleSpeedX / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    scaleSpeedY =
      (scaleSpeedY / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
      this.sizeTimer = setInterval(() => {
      if (tempSizeX >= Math.floor(X) && tempSizeY >= Math.floor(Y)){
        clearInterval(this.sizeTimer);
        this.element.style.width = (this.element.offsetWidth/this.element.parentElement.offsetWidth) * 100 + "%"
        this.element.style.height = (this.element.offsetHeight/this.element.parentElement.offsetHeight) * 100 + "%"
      }
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

  slideBlock(X, Y = 0) {
    clearInterval(this.slideTimer);
    let tempPosX = this.element.offsetLeft,
      tempPosY = this.element.offsetTop;
    let scaleSpeedX =
      X - tempPosX > Y - tempPosY ? (X - tempPosX) / (Y - tempPosY) : 1;
    let scaleSpeedY =
      Y - tempPosY > X - tempPosX ? (Y - tempPosY) / (X - tempPosX) : 1;
    scaleSpeedX =
      (scaleSpeedX / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
    scaleSpeedY =
      (scaleSpeedY / Math.max(scaleSpeedX, scaleSpeedY)) * this.animationSpeed;
      this.slideTimer = setInterval(() => {
      if (tempPosX >= Math.floor(X) && tempPosY >= Math.floor(Y)){
        clearInterval(this.slideTimer);
        console.log()
        this.element.style.left = (this.element.offsetLeft/this.element.parentElement.offsetWidth) * 100 + "%"
        this.element.style.top = (this.element.offsetTop/this.element.parentElement.offsetHeight) * 100 + "%"
      }
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
    clearInterval(this.slideTimer);
    let tempPosX = this.element.offsetLeft,
      tempPosY = this.element.offsetTop;
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
      this.slideTimer = setInterval(() => {
      if (tempPosX <= this.defaultLeft && tempPosY <= this.defaultTop){
        clearInterval(this.slideTimer);
        this.element.style.left = (this.element.offsetLeft/this.element.parentElement.offsetWidth) * 100 + "%"
        this.element.style.top = (this.element.offsetTop/this.element.parentElement.offsetHeight) * 100 + "%"
      }
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

  interruptActions(){
    clearInterval(this.sizeTimer);
    this.closeBlock();
    clearInterval(this.slideTimer);
    this.slideBlockHome()
  }

  interruptSize(){
    clearInterval(this.sizeTimer);
    this.closeBlock();
  }

  interruptSlide(){
    clearInterval(this.slideTimer);
    this.slideBlockHome();
  }
}

let masonryStorage = document.getElementById("masonryStorage");
let personalInfoDiv = document.getElementsByClassName("masonry-block")[0];

let personalInfoBlock = new Block(personalInfoDiv);

personalInfoDiv.onmouseover = ()=>{

  personalInfoBlock.openBlock(personalInfoDiv.offsetWidth*2, personalInfoDiv.offsetHeight*2)
}

personalInfoDiv.onmouseout = ()=>{
  personalInfoBlock.closeBlock()

}



moveGeoObj();
