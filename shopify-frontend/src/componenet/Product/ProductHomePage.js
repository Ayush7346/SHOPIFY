import React, { useEffect } from "react";
import Product from "./Product";
import './ProductHomepage.css'
import { connect } from 'react-redux'
import { getProducts } from '../../Action/ProductAction'





function ProductHomePage({ product_reducer, getProducts }) {

    useEffect(

        () => {
            getProducts();
        }

        , [product_reducer])

    return (
        <div>
            <div className="container">


                <div
                    className="banner-product-page"
                >
                    <div

                        style={{ width: "60%" }}
                    >

                        Store. <span
                            style={{ color: "#6E6E73" }}
                        >The best way to buy the<br /> products you love.  </span>

                    </div>

                </div>


                <div className="row my-1 gy-4">

                    {product_reducer.product.map(e => (
                        <div className="col-lg-4 col-xl-3 col-sm-6 col-xs-12">
                            <Product name={e.name} desc={e.desc} price={e.price} picture_url ={e.picture_url} 
                            prd_id = {e._id}
                            />
                        </div>
                    ))}

                </div>
            </div>

 
        </div>
    );
}

//below state comes from redux store 
//this state stores all the reducer
const mapStateToProps = (state) => ({

    product_reducer: state.productReducer

})

export default connect(mapStateToProps, { getProducts })(ProductHomePage);
//connect(map fxn , {action .... }) (component)