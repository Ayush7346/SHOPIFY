import React from 'react'
import './Product.css'
function Product() {
  return (
    <div>
          <div class="card card-product" >
          <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-gallery1-202206?wid=4000&hei=3074&fmt=jpeg&qlt=90&.v=1664558461719" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Apple Macbook</h5>
            <p class="card-text">Apple macbook 13 inch M1 chip</p>
            
            <div className='product-buttons'>
            
                <a href="#" class="btn btn-primary add-to-cart-button">Add to card</a>
                <a href="#" class="btn btn-primary add-to-cart-button">Buy now</a>
            
            </div>
            
          </div>
        </div>
    
    </div>
  )
}

export default Product