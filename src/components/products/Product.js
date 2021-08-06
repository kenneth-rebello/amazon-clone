import React from 'react'
import { useContextValue } from '../../context/Provider'
import './Product.css'

const Product = ({id, title, imageUrl, price, rating}) => {

    const [ {basket}, dispatch] = useContextValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,
                title,
                imageUrl,
                price,
                rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>&#8377; </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_) => (<p>&#11088;</p>))}
                </div>
            </div>
            
            <img src={imageUrl} alt={title}/>
            <button onClick={()=>addToBasket()}>Add to Basket</button>
        </div>
    )
}

export default Product;