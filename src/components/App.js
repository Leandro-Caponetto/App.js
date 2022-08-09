import Cart from "./NavBar/CartWidget"
import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from './ItemListContainer'
import Presentacional from "./Presentacional"
import { BrowserRouter as Router} from "react-router-dom";
import {DataProvider} from './context/DataProvider';
import  './App.css'



const App = () => {
    
   

    return (


        <DataProvider>
        <div>
            <Router>
                <Cart />
                <Presentacional titulo={"Leandro Caponetto"}/>
                
                    
                <ItemDetailContainer/>

                
                <ItemListContainer/>
            </Router>
                      
        </div>

         </DataProvider>

    );
}

export default App;