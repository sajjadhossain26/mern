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
import AddProducts from './components/Admin/AddProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

   // show all tag
  const [tag, setTag]=useState([]);
    // get all category  state
  const [cats, setCats]=useState([])
      // get all Products  state
  const [product, setProduct]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5050/tag").then(res=>{
      setTag(res.data)
    });
     axios.get('http://localhost:5050/category').then(res=>{
       setCats(res.data)
     });
       axios.get('http://localhost:5050/products').then(res=>{
       setProduct(res.data)
     })

  },[])

  return (
   <>
  
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop product={product} setProduct={setProduct} cats={cats} tag={tag}/>}/>
      <Route path='/shop/:slug' element={<SingleProduct/>} />
      <Route path='/admin' element={<Admin/>}>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/products' element={<Products product={product}/>}/>
        <Route path='/admin/add-products' element={<AddProducts tag={tag} cats={cats}/>}/>
        <Route path='/admin/category' element={<Category cats={cats}/>}/>
        <Route path='/admin/tag' element={<Tag tag={tag}/>}/>
        <Route path='/admin/add-tag' element={<AddTag/>}/>
      </Route>
    </Routes>
   <Footer/>
 
   </>
  );
}

export default App;
