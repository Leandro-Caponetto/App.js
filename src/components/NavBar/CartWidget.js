import NavBar from "./NavBar"



const Cart = ({contador}) => {
    return (
        <header className="header">

            <img className="header__image" src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' alt="logo" />
            
           
            
            
            <NavBar
                type="header"
            />
            <div>
                <span className="material-symbols-outlined ">
                    shopping_cart
                </span>
                <p>{contador}</p>

            </div>
            
            
            
           
        </header>
    )
}

export default Cart