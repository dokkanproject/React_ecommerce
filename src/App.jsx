import './App.css';
import NavBar from './components/NavBar';
import ListadoItems from './components/ItemListConainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <BrowserRouter>
    <Box>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ListadoItems sx={{ flexGrow: 1 }}/>}/>
        <Route exact path='/cart' element={<div>Mi Carrito</div>}/>
        <Route exact path='/detalle/:productID' element={<ItemDetailContainer/>}/>
        <Route exact path='categorias/:categoriaID' element={<ListadoItems sx={{ flexGrow: 1 }}/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
    
  );
}

export default App
