import { BrowserRouter } from "react-router-dom";

import Header from "./Header"
import Main from "./Main";
import Provider from "./CartContext"






const App = () => {
    
    return (
        <BrowserRouter>
            <Provider titulo="hola">
                <Header />

                <Main/>
                
            </Provider>
           
            
        </BrowserRouter>
    )
}
export default App;