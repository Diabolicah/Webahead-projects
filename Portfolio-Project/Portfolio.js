function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function createBackgroundEffect() {
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

async function createLoadingEffect(){
  let bubbleStorage = document.getElementById("bubbleStorage");
  for(let i = 0; i < 1000; i++) {
    let element = document.createElement("span");
    element.className = "loading-bubble";
    let size = 20 + Math.random() * 60;

    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.left = (Math.random() * document.documentElement.clientWidth).toString() + "px";
    bubbleStorage.appendChild(element);

    setTimeout(() => element.remove(), 4000);
    await sleep(1);
  }
}

async function loadWebsite(){
  createLoadingEffect();
  await sleep(1150);
  createBackgroundEffect();
  let bubbleStorage = document.getElementById("bubbleStorage");
  for(let i = 250; i > 0; i--){
    bubbleStorage.style.opacity = i/250
    await sleep(0.5)
  }
  bubbleStorage.remove();
}

loadWebsite();