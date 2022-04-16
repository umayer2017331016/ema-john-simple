import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props)
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
           <div className='product-img'>
                <img src={img} alt="" />
           </div>
           <div className='product-body'>
               {/* <h2>This is Product</h2>*/}
                <h4>{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>   
                <p>${price}</p>  
                <p><small>only {stock} left in stock - order soon</small></p> 
                <button className='main-btn'> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button> 
           </div>
        </div>
    );
};

export default Product; 