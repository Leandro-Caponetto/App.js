import Nav from "./Nav"

const Header = ({contador}) => {
    return (
        <header className="header">

            <img className="header__image" src= '/logo192.png' alt="logo" />
            <Nav
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

export default Header