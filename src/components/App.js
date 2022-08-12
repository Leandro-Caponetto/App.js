import { BrowserRouter } from "react-router-dom";

import CartWidget from "./NavBar/CartWidget"
import Main from "./Main";

const App = () => {
    
    return (
        <BrowserRouter>
            <CartWidget />
            <Main/>
            
        </BrowserRouter>
    )
}

export default App;