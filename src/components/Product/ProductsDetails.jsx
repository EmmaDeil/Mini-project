import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../Data'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../redux/actions/index'

const ProductsDetails = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart")
  const proid  = useParams()
  const proDetail = Data.filter(x => x.id == proid.id);
  const product = proDetail[0];

  const dispatch = useDispatch()

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height='400px'/>
          </div>
          <div className="col-md-6 justify-content-center mx-auto">
            <h1 className='display-5 fw-bold'>{product.title}</h1>
            <p>{product.desc}</p>
            <button onClick={() => handleCart(product)}  className='btn btn-outline-primary my-5'>{cartBtn}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails