const lodeProduct = () => {
    const cart = getCard()
    for (const product in cart) {
        displayProduct(product)
    }

}



const addItem = () => {
    const nameField = document.getElementById('productName');
    const name = nameField.value;
    if (!name) {
        return;
    }
    //  display in the Ui 
    displayProduct(name)


    // add local storage 
    addproductToCart(name);



    // clear name fild 

    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('ul')
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCard = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)


    }
    else {
        cartObj = {}
    }
    return cartObj;
}
const addproductToCart = name => {
    console.log(name)
    const cart = getCard();
    if (cart[name]) {
        cart[name] = cart[name] + 1;;
    }
    else {
        cart[name] = 1;
    }
    console.log(cart)
    const putcart = JSON.stringify(cart);
    localStorage.setItem('cart', putcart)

}

const placeOrder = () => {
    document.getElementById('ul').textContent = '';
    localStorage.removeItem('cart')
}



lodeProduct();