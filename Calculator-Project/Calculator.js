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
  
  async function loadWebsite(){
    createBackgroundEffect();
  }
  
  loadWebsite();