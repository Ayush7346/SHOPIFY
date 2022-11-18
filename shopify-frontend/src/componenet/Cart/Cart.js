import React from 'react'
import './Cart.css'

function Cart() {
    return (
        <div>
        
        {[1,2].map(e => (
        
        <div className='container cart-bag my-3'>

        <div className='prod_image'>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481"
                style={
                    {
                        height: "300px",
                        width: "300px"
                    }
                }
            />
        </div>

        <div className='cart_detail my-5'>


            <div className='details-prd my-4'>

                <div
                    style={{ fontWeight: "bolder", fontSize: "23px" }}
                >iPhone 14</div>
                <div>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                            style={{ background: "transparent", color: "black" }}
                        >
                            Quantity
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">1</a></li>
                            <li><a class="dropdown-item" href="#">2</a></li>
                            <li><a class="dropdown-item" href="#">3</a></li>
                        </ul>
                    </div>

                </div>
                <div>Price</div>


            </div>

            <hr />

            <div className='details-prd my-4'>
                <div>Add a gift message</div>
                <div><a
                    style={{ fontWeight: "lighter", fontSize: "15px", color: "blue" }}
                >Add</a></div>
            </div>

            <hr />


        </div>

    </div>
        
        ))}


            <div>
                <div className='container total-cart-value'>


                    <div className='details-prd my-4'>

                        <div
                            style={{ fontWeight: "bolder", fontSize: "23px" }}
                        >Shipping</div>
                        <div>FREE</div>


                    </div>

                    <hr />

                    <div className='details-prd my-4'>
                        <div
                            style={{ fontWeight: "bolder", fontSize: "23px" }}
                        >Total</div>
                        <div>Price</div>
                    </div>

                    <hr />

                    <button className='btn btn-primary'>Check Out</button>


                </div>



            </div>

        </div >
    )
}

export default Cart