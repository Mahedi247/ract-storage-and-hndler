// use to local storage daa management

const addToDb = id => {
    let shoppingCart = {};
    // get quantity
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);

    }
    // else {
    //     shoppingCart = {};
    // }



    // Add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        shoppingCart[id] = quantity + 1;

    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    const shoppingCart = JSON.parse(storedCart)
    if (storedCart) {
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }



}



export { addToDb, removeFromDb }