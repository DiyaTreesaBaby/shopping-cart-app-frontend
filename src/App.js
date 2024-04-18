import logo from './logo.svg';
import './App.css';
import AddProduct from './component/AddProduct';
import ViewAll from './component/ViewAll';
import SearchProduct from './component/SearchProduct';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<ViewAll/>} />
<Route path='/Add' element={<AddProduct/>} />
<Route path='/Search' element={<SearchProduct/>} />


</Routes>



</BrowserRouter>
  
 

  );
}

export default App;
