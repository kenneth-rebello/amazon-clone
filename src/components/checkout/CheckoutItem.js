import React from 'react';
import { useContextState } from '../../context/Provider';
import './CheckoutItem.css'

const CheckoutItem = ({id, title, imageUrl, price, rating}) => {

    const [{basket}, dispatch]  = useContextState();

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="checkoutProduct">

            <img src={imageUrl} alt="product" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">

                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price">
                <small>&#8377; </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_) => (<p>&#11088;</p>))}
                </div>

                <button onClick={()=>removeFromBasket()}>Remove from basket</button>

                <hr/>
            </div>
        </div>
    )
}

export default CheckoutItem
