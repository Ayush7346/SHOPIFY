import React from 'react'
import './ProductDetail.css'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { searchProduct } from '../../Action/ProductAction'

function ProductDetail({ prodReducer, searchProduct }) {

    const location = useLocation();





    useEffect(() => {

        const arr = location.pathname.split('/');
        const prd_id = arr[2];

        searchProduct(prd_id);

    }, [])



    return (
        <div>


            <div
                className='container buy-product my-2'
            >
                < h5 class="card-title"
                    style={{
                        fontSize: "15px", fontWeight: "lighter"
                        , color: "#BF4800"
                    }}
                >New</h5>
                Buy {prodReducer.productdetails.name}
                <h5 class="card-text"> From ₹{Math.round(prodReducer.productdetails.price / 8.5)}/mo.Per Month with EMI,** or {prodReducer.productdetails.price}‡</h5>
            </div>


            <div className='container product-detail-page my-2 py-2'>
                <div className='img image-details'>
                    <img src={prodReducer.productdetails.picture_url} alt=''
                        style={{ height: "400px", width: "400px" }}
                    />
                </div>

                <div className='container product-detail my-2'>
                    <div class="card product-detail-inner ">
                        < h5 class="card-title"
                            style={{
                                fontSize: "15px", fontWeight: "lighter"
                                , color: "#BF4800"
                            }}
                        >New</h5>
                        <div class="card-body">
                            <h5 class="card-title">{prodReducer.productdetails.name}</h5>
                            <p class="card-text">{prodReducer.productdetails.desc} </p>
                            <h5 class="card-title">₹ {prodReducer.productdetails.price}*</h5>
                            <a href="#" class="btn btn-primary"
                                style={{
                                    borderRadius: "2em",
                                    fontWeight: "300",
                                    background: "#0077ED",
                                    color: "white"

                                }}
                            >Buy</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({

    prodReducer: state.productReducer

})


export default connect(mapStateToProps, { searchProduct })(ProductDetail)