
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';

import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer'
import MyProvider from '../context/CartContext';
import NavBar from './NavBar/Nav';




const App = () => {
    
    return (
     
      <BrowserRouter>
      <MyProvider>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenido a mi Tienda Online"}/>}/>
          
          <Route exact path='/category/:categor' element={<ItemListContainer greeting={"Bienvenido a mi Tienda Online"} />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/checkout' element={<Checkout/>}/>
        </Routes>
      </MyProvider>
    </BrowserRouter>
    )

}
export default App;