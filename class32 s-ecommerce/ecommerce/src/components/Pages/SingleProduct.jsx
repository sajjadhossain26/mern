import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import product from '../../_assets/images/shop/single-1.jpg'
import product2 from '../../_assets/images/shop/single-2.jpg'
import product3 from '../../_assets/images/shop/single-3.jpg'
import product4 from '../../_assets/images/shop/single-4.jpg'
import Rating from './Rating'

const SingleProduct = () => {
  const {slug}= useParams();

  const [products, setProducts]=useState({

      name: '',
      slug: '',
      regular_price: '',
      sale_price: '',
      description: '',
      rating: '',
      tagId: '',
      categoryId: '',
      photo: ''
  });

  const [related, setRelated]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5050/products?slug=${slug}`).then(res=>{
      setProducts(res.data[0])
    })
     axios.get(`http://localhost:5050/category/${products.categoryId}/products`).then(res=>{
      setRelated(res.data)
    })
  },[products])
  return (
    <>
      <section>
      <div className="container">
        <div className="single-product-details">
          <div className="row">
            <div className="col-md-6">
              <div data-options="{&quot;animation&quot;: &quot;slide&quot;, &quot;controlNav&quot;: true}" className="flexslider nav-inside control-nav-dark">
             <img src={products.photo} alt="" />
              </div>
            </div>
            <div className="col-md-5 col-md-offset-1">
              <div className="title mt-0">
                <h2>{products.name}<span className="red-dot"></span></h2>
                <p className="m-0">Free Shipping Worldwide</p>
              </div>
              <div className="single-product-price">
                <div className="row">
                  <div className="col-xs-6">
                      {
                        products.sale_price===''?<h3><span>{products.regular_price} BDT</span></h3>:
                       <h3> <del>{products.regular_price} BDT</del><span>{products.sale_price} BDT</span></h3>
                      }
                  </div>

                  <div className="col-xs-6 text-right">
                   <Rating rat={products.rating}/>
               
                  </div>
                </div>
              </div>
              <div className="single-product-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat iste natus at impedit quo consequuntur, quam, vel saepe voluptatum minus temporibus excepturi aspernatur labore molestiae fugit tempora veritatis unde.</p>
              </div>
              <div className="single-product-add">
                <form action="#" className="inline-form">
                  <div className="input-group">
                    <input type="number" placeholder="QTY" value="1" min="1" className="form-control"/><span className="input-group-btn"><button type="button" className="btn btn-color">Add to Cart<i className="ti-bag"></i></button></span>
                  </div>
                </form>
              </div>
              <div className="single-product-list">
                <ul>
                  <li><span>Sizes:</span> S, M, L, XL</li>
                  <li><span>Colors:</span> Blue, Red, Grey</li>
                  <li><span>Category:</span><a href="#">Blazers</a>
                  </li>
                  <li><span>Tags:</span><a href="#">Outfit</a>-<a href="#">Jeans</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="product-tabs">
          <ul role="tablist" className="nav nav-tabs">
            <li role="presentation" className="active"><a href="#first-tab" role="tab" data-toggle="tab">Description</a>
            </li>
            <li role="presentation"><a href="#second-tab" role="tab" data-toggle="tab">Sizes</a>
            </li>
            <li role="presentation"><a href="#third-tab" role="tab" data-toggle="tab">Reviews (3)</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="first-tab" role="tabpanel" className="tab-pane active">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum hic doloribus dolore explicabo, a voluptate optio culpa, aut nulla voluptatem sit nam sed molestias adipisci! Eius nulla beatae, quidem quae. Praesentium eveniet ullam quos
                accusamus, ea nemo cupiditate. Nemo harum sit, necessitatibus voluptates, sapiente dolorum minima, placeat explicabo consequuntur at neque deserunt.</p>
              <p>Quidem illum, enim aut, minus nesciunt, distinctio inventore sunt autem numquam eveniet non asperiores unde! Corrupti modi minima doloremque, illum aperiam nemo.</p>
            </div>
            <div id="second-tab" role="tabpanel" className="tab-pane">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th className="upper">Size</th>
                    <th className="upper">Bust (CM)</th>
                    <th className="upper">Waist (CM)</th>
                    <th className="upper">Hips (CM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>78</td>
                    <td>60</td>
                    <td>83</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>80</td>
                    <td>62</td>
                    <td>86</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>88</td>
                    <td>65</td>
                    <td>88</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="third-tab" role="tabpanel" className="tab-pane">
              <div id="comments">
                <ul className="comments-list">
                  <li className="rating">
                    <h5 className="upper">Jesse Pinkman - <span className="rating-stars"><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star"></i></span></h5><span className="comment-date">Posted on 29 September at 10:41</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem quo sit. Sint fugit quidem totam similique suscipit animi veniam reiciendis, unde facere quia, optio, at ad possimus perferendis asperiores.</p>
                  </li>
                  <li className="rating">
                    <h5 className="upper">Rust Cohle - <span className="rating-stars"><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star"></i></span></h5><span className="comment-date">Posted on 29 September at 10:41</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aspernatur vero dolorum asperiores ratione obcaecati atque quidem aliquid dicta illo, quod, similique suscipit maiores, aperiam expedita cum. Ut fugiat, dolores.</p>
                  </li>
                  <li className="rating">
                    <h5 className="upper">Arya Stark - <span className="rating-stars"><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i></span></h5><span className="comment-date">Posted on 29 September at 10:41</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aspernatur vero dolorum asperiores ratione obcaecati atque quidem aliquid dicta illo, quod, similique suscipit maiores, aperiam expedita cum. Ut fugiat, dolores.</p>
                  </li>
                </ul>
              </div>
              <div id="respond">
                <h5 className="upper">Leave a rating</h5>
                <div className="comment-respond">
                  <form className="comment-form">
                    <div className="form-double">
                      <div className="form-group">
                        <input name="author" type="text" placeholder="Name" className="form-control"/>
                      </div>
                      <div className="form-group last">
                        <input name="email" type="text" placeholder="Email" className="form-control"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-select">
                        <select className="form-control">
                          <option value="" selected="selected">Chose a rating</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Comment" className="form-control"></textarea>
                    </div>
                    <div className="form-submit text-right">
                      <button type="button" className="btn btn-color-out">Post Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-products">
          <h5 className="upper">Related Products</h5>
          <div className="row">
            {
              related.map(data=>
                data.slug !== slug?
                  <div className="col-md-3 col-sm-6">
              <div className="shop-product">
                <div className="product-thumb">
                  <a href="#">
                    <img src={data.photo} alt=""/>
                  </a>
                </div>
                <div className="product-info">
                  <h4 className="upper"><a href="#">Premium Notch Blazer</a></h4><span>$79.99</span>
                  <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                  </div>
                </div>
              </div>
            </div> : ''
                
                )
            }
          
         
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default SingleProduct