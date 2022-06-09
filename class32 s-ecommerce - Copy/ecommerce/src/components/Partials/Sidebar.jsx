import React from 'react'
import image1 from '../../_assets/images/shop/1.jpg'

const Sidebar = () => {
  return (
     <div class="sidebar">
              <div class="widget">
                <h6 class="upper">Search Shop</h6>
                <form>
                  <input type="text" placeholder="Search.." class="form-control"/>
                </form>
              </div>
              <div class="widget">
                <h6 class="upper">Categories</h6>
                <ul class="nav">
                  <li><a href="#">Beauty</a>
                  </li>
                  <li><a href="#">Blazers</a>
                  </li>
                  <li><a href="#">Bags</a>
                  </li>
                  <li><a href="#">Jeans</a>
                  </li>
                  <li><a href="#">Shorts</a>
                  </li>
                  <li><a href="#">Dresses</a>
                  </li>
                </ul>
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
         
              <div class="widget">
                <h6 class="upper">Popular Tags</h6>
                <div class="tags clearfix"><a href="#">Hipster</a><a href="#">Fashion</a><a href="#">Shirt</a><a href="#">Modern</a><a href="#">Vintage</a>
                </div>
              </div>
            </div>
  )
}

export default Sidebar