import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {delItem} from '../../redux/actions/index'
import { Link } from 'react-router-dom'

const Cart = () => {
  const state = useSelector((state) => state.addItems)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delItem(item))
  }

  const cartItems = (cartItems) => {
    return(
      <div className="bg-light px-4 my-5 rounded-3" key={cartItems.id}>
        <div className="container py-4">
          <button onClick={() => handleClose(cartItems)} className='btn-close float-end' aria-label='Close'></button>
          <div className="row justify-content-center">
            <div className="col-mb-4">
              <img src={cartItems.img} alt="" height='200px' width='180px' />
            </div>
            <div className='col-md-4'>
              <h3>{cartItems.title}</h3>
              <p className='fw-bold'>#{cartItems.price}</p>
            </div>
          </div>
        </div>
        <Link to='/checkout' className='btn btn-outline-primary mb-5 w-25 mx-auto'>Proceed to checkout</Link>
      </div>
    )
  }

  const emptyCart = () => {
    return (
      <div className="bg-light px-4 my-5 rounded-3 py-5">
        <div className="container">
          <div className="row">
            <h3>You cart is empty</h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </div>
  )
}

export default Cart