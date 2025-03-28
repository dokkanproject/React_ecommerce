import './App.css';
import NavBar from './components/NavBar';
import ListadoItems from './components/ItemListContainer/ItemListConainer';
import ListadoCategorias from './components/CategoryList/CategoryList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { ShopComponentContext } from './context/ShopContext';

function App() {

  return (
    <ShopComponentContext>
      <BrowserRouter>
      <Box>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ListadoCategorias sx={{ flexGrow: 1 }}/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/detalle/:productID' element={<ItemDetailContainer/>}/>
          <Route exact path='categorias/:categoriaID' element={<ListadoItems margenTop={15} sx={{ flexGrow: 1 }}/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </ShopComponentContext>
  );
}

export default App
