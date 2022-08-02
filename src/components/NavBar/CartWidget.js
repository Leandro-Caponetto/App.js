import NavBar from "./NavBar"

const Cart = ({contador}) => {
    return (
        <header className="header">

            <img className="header__image" src= '/logo192.png' alt="logo" />
            <NavBar
                type="header"
            />
           
            <dir className="carrito">
                <span className="material-symbols-outlined">
                    shopping_cart
                    
                </span>
                <p> {contador}</p>
            </dir>
            
           
        </header>
    )
}

export default Cart