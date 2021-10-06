function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function moveGeoObj() {
  let objStorage = document.getElementById("geoObjStorage");
  while (true) {
    let element = document.createElement("div")
    element.className = "geoObj"
    objStorage.appendChild(element)
    element.style.top =
      (Math.random() * document.documentElement.clientHeight).toString() + "px";
    element.style.left =
      (Math.random() * document.documentElement.clientWidth).toString() + "px";
    element.style.borderRadius = (Math.random()*100)+"%" 
    setTimeout(()=>element.remove(), 10000)
    await sleep(1000);
  }
}

class Block {
    constructor(element) {
        this.element = element;
        this.defaultHeight = element.offsetHeight;
        this.height = this.defaultHeight;
        this.defaultWidth = element.offsetWidth;
        this.width = this.defaultWidth;
        this.defaultLeft = element.offsetLeft;
        this.left = this.defaultLeft;
        this.defaultTop = element.offsetTop;
        this.top = this.defaultTop;
    }

    get isOpen(){
        return this.defaultHeight - this.height !== 0 || this.defaultWidth - this.width !==0;
    }

    closeBlock(){
        let tempScaleX = element.offsetWidth / this.defaultWidth
        let tempScaleY = element.offsetHeight / this.defaultHeight
        this.element.animate([{transform: "scaleX("+tempScaleX+")"},{transform: "scaleY("+tempScaleY+")"}])
    }

    scaleBlock(scaleX, scaleY = 1){
        console.log(scaleX, scaleY);
            this.element.style.transform = "translateY(100px)";
        }
}

// let masonryStorage = document.getElementById("masonryStorage")
// let tempDiv = document.createElement("div")
// tempDiv.style.width = "10px"
// tempDiv.style.height = "10px"
// tempDiv.style.backgroundColor = "red"
// masonryStorage.appendChild(tempDiv)

// let tempDivBlock = new Block(tempDiv)
// tempDivBlock.scaleBlock(5)

// console.log(tempDiv, tempDivBlock)

moveGeoObj();

