
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';
import Header from "./Header"
import ItemDetailContainer from '../containers/ItemDetailContainer';
import ItemListContainer from '../containers/ItemListContainer'
import MyProvider from '../context/CartContext';




const App = () => {
    
    return (
     
      <BrowserRouter>
      <MyProvider>
        <Header/>
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a mi Tienda Online"}/>}/>
          
          <Route path='/category/:categorias' element={<ItemListContainer greeting={"Bienvenido a mi Tienda Online"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </MyProvider>
    </BrowserRouter>
    )

}
export default App;