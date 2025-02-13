import './App.css';
import NavBar from './components/NavBar';
import ListadoItems from './components/ItemListConainer';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <NavBar/>
      <ListadoItems/>
    </Box>
  );
}

export default App
