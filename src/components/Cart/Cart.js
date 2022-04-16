import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd)=>total+prd.price,0);
    // let total =0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total+=product.price;
        
    // }
    let shipping = 0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Items:     {total.toFixed(2)}</small></p>
            <p><small>Shipping Price: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <h5>Total Price: {grandTotal}</h5>
        </div>
    );
};

export default Cart;