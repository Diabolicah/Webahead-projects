const products = ['Milk', 'Eggs', 'Cornflex']
const productsList = document.getElementById('productsList')

products.forEach((product) => {
    const listItem = document.createElement('li')
    listItem.textContent = product

    productsList.appendChild(listItem)
})