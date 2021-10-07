const products = ['Milk', 'Eggs', 'Cornflex']
const productsList = document.getElementById('productsList')

products.forEach((product, index) => {
    const listItem = document.createElement('li')
    listItem.textContent = product

    setTimeout(() => {
        productsList.appendChild(listItem)
    }, (index + 1) * 1000);
})