import React from 'react'
import './Product.css'
import {useNavigate}  from 'react-router-dom'

function Product(props) {

const navigate = useNavigate()

const handleClick = (id) =>{
    navigate(`/product/${id}`)
}

  return (
    <div>
      <div class="card card-product"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={props.picture_url}
          style={{ height: "250px", width: "250px" }}
          class="card-img-top" alt="..." />
        <div class="card-body"
        style={{width:"100%"}}
        >

          <h5 class="card-title"
            style={{
              fontSize: "15px", fontWeight: "lighter"
              , color: "#BF4800"
            }}
          >New</h5>

          <h5 class="card-title"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >{props.name}</h5>
          {/* <p class="card-text"
             style={{fontSize:"20px"}}
            >{props.desc}</p> */}
          <p class="card-text"
            style={{ fontSize: "20px", fontWeight: "600" }}
          >From {props.price}*</p>


          <div className='product-buttons'>


            <a href="#" class="btn buy-button"
              style={{
                borderRadius: "2em",
                fontWeight: "300",
                background: "#0077ED",
                color: "white"

              }}
            >Buy</a>

            <a class="add-to-cart-button"
              style={{
                fontWeight: "300"
              }}
              onClick={() => handleClick(props.prd_id)}
            >Learn more ></a>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Product