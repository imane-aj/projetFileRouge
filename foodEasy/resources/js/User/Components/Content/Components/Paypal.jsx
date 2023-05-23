import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../../../redux/CheckoutSlice';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Paypal() {
  const data_paypal = useSelector((state)=>state.toggle.data)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '0.01'
          }
        }
      ]
    })
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const updatedData = {
        ...data_paypal,
        payment_id: details.id,
      };
      dispatch(placeOrder(updatedData)).then((res) => {
        if(res.type === 'checkout/placeOrder/fulfilled'){
        Swal.fire('Success', res.payload.message, 'success')
        dispatch(getFromCart())
        navigate('/')
    }});
    });
  };

  return (
    <div className='mt-64'>
    <PayPalButton
    createOrder={(data, actions) => createOrder(data, actions)}
    onApprove={(data, actions) => onApprove(data, actions)}
  />
  </div>
  )
}

export default Paypal