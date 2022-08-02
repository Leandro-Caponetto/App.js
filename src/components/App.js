import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemList from "./ItemList/ItemList";
import Cards from "./Cards"


import  './App.css'


const App = () => {
    
   

    return (
        <>
             <ItemListContainer/>
            
            
            
            <ItemList name={"Leandro Caponetto"} />
            
                <div className="App">
                    <Cards />
                    
                </div>
               
                
               
            
            
           
            
        </>


    )
}

export default App;