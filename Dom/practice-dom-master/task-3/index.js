const products = ['Milk', 'Eggs', 'Cornflex']

// Select the ul using it's id
let productsList = document.getElementById("productsList")

// iterate over products and build the list
products.forEach((product, index)=>setTimeout(()=>{
    let tempItem = document.createElement("li")
    tempItem.textContent = product
    productsList.appendChild(tempItem)
},1000*index+1000))