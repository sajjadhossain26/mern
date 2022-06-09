import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image1 from '../../_assets/images/shop/1.jpg'

const Sidebar = ({setProduct, cats, tag}) => {
 
 const handleCatSearch=(e, id)=>{
   e.preventDefault();
   setSearch('')
   axios.get(`http://localhost:5050/category/${id}/products`).then(res=>{
     setProduct(res.data)
   })
 }
 const handleTagSearch=(e, id)=>{
   e.preventDefault();
   setSearch('')
   axios.get(`http://localhost:5050/tag/${id}/products`).then(res=>{
     setProduct(res.data)
   })
 }
  const [search, setSearch]= useState('')
  useEffect(()=>{
    if(search !== ''){
         axios.get(`http://localhost:5050/products?q=${search}`).then(res=>{
       setProduct(res.data)
    })
    }
   
  },[search])
  return (
     <div class="sidebar">
              <div class="widget">
                <h6 class="upper">Search Shop</h6>
                <form>
                  <input type="text" placeholder="Search.." class="form-control" value={search} onChange={e=> setSearch(e.target.value)}/>
                </form>
              </div>
              <div class="widget">
                <h6 class="upper">Categories</h6>
                <ul class="nav">
                  {
                    cats.map(data=>
                      <li>
                         <a href={data.id} onClick={ e=> handleCatSearch(e, data.id)}>{data.name}</a>
                     </li>
                      
                      )
                  }
                 
                 
                </ul>
              </div>
                    <div class="widget">
                <h6 class="upper">Popular Tags</h6>
                <div class="tags clearfix">
                  {
                    tag.map(data=>
                  <a  onClick={e=> handleTagSearch(e, data.id)}  href="">{data.tag}</a>

                    )
                  }
                </div>
              </div>
              <div class="widget">
                <h6 class="upper">Trending Products</h6>
                <ul class="nav product-list">
                  <li>
                    <div class="product-thumbnail">
                      <img src={image1} alt=""/>
                    </div>
                    <div class="product-summary"><a href="#">Premium Suit Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div class="product-thumbnail">
                      <img src={image1} alt=""/>
                    </div>
                    <div class="product-summary"><a href="#">Vintage Sweatshirt</a><span>$199.99</span>
                    </div>
                  </li>
                  <li>
                    <div class="product-thumbnail">
                      <img src={image1} alt=""/>
                    </div>
                    <div class="product-summary"><a href="#">Reiss Vara Blazer</a><span>$199.99</span>
                    </div>
                  </li>
                </ul>
              </div>
         
        
            </div>
  )
}

export default Sidebar