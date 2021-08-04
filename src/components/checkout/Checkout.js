import React from 'react';
import './Checkout.css'

import { useContextState } from '../../context/Provider'
import CheckoutItem from './CheckoutItem';
import Subtotal from './Subtotal';

const Checkout = () => {

    const [{basket, user}] = useContextState()

    return (
        <div className="checkout">
            <div className="checkout__left">
                < img 
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Fujitsu/Fujitsu_Laptop_v2_1500_v2.jpg"
                    alt="Ads"
                />
                {basket?.length === 0 ? (
                <div className="checkout__card">
                    <h3>{user?.email}</h3>
                    <h2 className="checkout__title">Your Amazon basket is empty</h2>
                </div>
                ) : (
                <div className="checkout__card">
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Amazon basket</h2>
                    {basket?.map(item => <CheckoutItem 
                        id={item.id} 
                        title={item.title} 
                        imageUrl={item.imageUrl}
                        price={item.price}
                        rating={item.rating}
                    />)}
                </div>)} 
            </div>
                
            <div className="checkout__right">
                {basket.length>0 && <Subtotal basket={basket}/>}
            </div>
        </div>
    )
}

export default Checkout