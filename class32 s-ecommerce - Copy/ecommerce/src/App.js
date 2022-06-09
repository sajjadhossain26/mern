import './App.css';
import {Route, Routes} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './components/Pages/Shop';
import SingleProduct from './components/Pages/SingleProduct';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import Home from './components/Pages/Home';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard';
import Products from './components/Admin/Products';
import Tag from './components/Admin/Tag';
import Category from './components/Admin/Category';
import AddTag from './components/Admin/AddTag';
function App() {
  return (
   <>
  
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/:name' element={<SingleProduct/>} />
      <Route path='/admin' element={<Admin/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/category' element={<Category/>}/>
        <Route path='/admin/tag' element={<Tag/>}/>
        <Route path='/admin/add-tag' element={<AddTag/>}/>
      </Route>
    </Routes>
   <Footer/>
 
   </>
  );
}

export default App;
