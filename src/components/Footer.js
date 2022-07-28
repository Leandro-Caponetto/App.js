import Nav from "./NavBar"

const Footer = ({contador,nombre}) => {

    return (
        <footer className="footer">
            <p>Bienvenido {nombre}</p>
            <div>
                <p>El contador va :{contador} </p>

                
            </div>
            
            <Nav
                type="footer"
            />
        </footer>
    )
}

export default Footer