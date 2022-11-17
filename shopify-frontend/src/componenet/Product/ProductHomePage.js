import React from "react";
import Product from "./Product";
import './ProductHomepage.css'
function ProductHomePage() {
    return (
        <div>
            <div className="container">
                <div className="row my-5 gy-3">

                    {[1, 2, 3, 4, 5, 6, 7].map(e => (
                        <div className="col-lg-4 col-xl-3 col-sm-6 col-xs-12">
                            <Product />
                        </div>
                    ))}

                </div>
            </div>


        </div>
    );
}

export default ProductHomePage;
