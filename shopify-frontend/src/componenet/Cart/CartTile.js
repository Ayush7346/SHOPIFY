import React ,{useState} from 'react'
import './Cart.css'


function CartTile(props) {

    const [quantity , setQuantity] =  useState(1);
  
    const handleQuantity = (x) => {
         setQuantity(x);
    }

    return (
        <div>

            <div className='container cart-bag my-3'>

                <div className='prod_image'>
                    <img src={props.picture_url}
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
                        >{props.name}</div>
                        <div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    style={{ background: "transparent", color: "black" }}
                                >
                                    {quantity}
                                </button>
                                <ul className="dropdown-menu">
                                    <li value={1} ><a className="dropdown-item"

                                        onClick={p => handleQuantity(1)}

                                    >1</a></li>
                                    <li value={2}><a className="dropdown-item"
                                        onClick={p => handleQuantity(2)}
                                    >2</a></li>
                                    <li value={3} ><a className="dropdown-item"
                                        onClick={p => handleQuantity(3)}
                                    >3</a></li>
                                </ul>
                            </div>

                        </div>
                        <div>{quantity*props.price}</div>


                    </div>

                    <hr />

                    <div className='details-prd my-4'>
                        <div>Add a gift message</div>
                        <div><a
                            style={{ fontWeight: "lighter", fontSize: "15px", color: "blue" }}
                        >Add</a></div>
                    </div>

                    <hr />
Delete
                    <hr />

                </div>

            </div>

        </div>
    )
}

export default CartTile