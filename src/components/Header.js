import { Link } from "react-router-dom"
import NavBar from "./NavBar/Nav"

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="header__titulo" >TOPSHOP</h1>
            </Link>
            <NavBar type="header" />
        </header>
    )
}

export default Header