const getCart = () => {
    let cart = []

    if (localStorage.getItem("cart")) {
        try{
            cart = JSON.parse(localStorage.getItem("cart"))
        } catch(e) {
            localStorage.removeItem("cart")
        }
    }

    return cart
}

const addCart = (item) => {
    let cart = getCart()
    cart.push(item)

    try{
        let parsed = JSON.stringify(cart)
        localStorage.setItem("cart", parsed)
        return true
    } catch (err) {
        return false
    }
}

const checkCart = (id) => {
    let cart = getCart()
    
    return cart.filter(item => item.id === Number(id)).length > 0
}

const removeCart = (id) => {
    let cart = getCart()

    cart = cart.filter(item => item.id !== Number(id))

    try{
        let parsed = JSON.stringify(cart)
        localStorage.setItem("cart", parsed)
        return true
    } catch (err) {
        return false
    }
}

const countCart = () => {
    return getCart().length
}

export { addCart, getCart, checkCart, removeCart, countCart }