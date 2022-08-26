

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from "./components/Header"
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer'
import MyProvider from './context/CartContext';




const App = () => {
    
    return (
     
      <BrowserRouter>
      <MyProvider>
        <Header/>
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenido a mi Tienda Online"} />} />
          <Route path='/category/:categorias' element={<ItemListContainer greeting={"Bienvenido a mi Tienda Online"} />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </MyProvider>
    </BrowserRouter>
    )
}
export default App;