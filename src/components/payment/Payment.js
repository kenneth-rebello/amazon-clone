import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../../axios';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import NumberFormat from 'react-number-format';
import { ShoppingBasket } from '@material-ui/icons';

import { useContextValue } from '../../context/Provider';
import { getBasketTotal } from '../../context/Reducer';
import CheckoutItem from '../checkout/CheckoutItem'
import './Payment.css';
import { db } from '../../firebase/firebase';


const Payment = () => {

    const [{basket, user}, dispatch] = useContextValue();
    console.log(user?.id)
    console.log(user?.uid)
    const [clientSecret, setClientSecret] = useState("null");
    const [intent, setIntent] = useState({});
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    useEffect(()=>{
        const getClientSecret = async () =>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret || "XXXX");
        }   
        getClientSecret();
    }, [basket])

    const handleSubmit = async e =>{
        e.preventDefault();
        setProcessing(true);
        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent })=>{
        //     setIntent(paymentIntent)
        // }).finally(()=>{
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(intent?.id)
            .set({
                basket: basket,
                amount: intent?.amount || getBasketTotal(basket)*100,
                created: intent?.created || Math.round((new Date()).getTime() / 1000)
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace("/orders")
        // })
    }

    const handleChange = e =>{
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "");
    }
    
    return (
        <div className="payment">

            <div className="payment__container">

                <h1>
                    <Link to="/checkout">
                        <ShoppingBasket/> Checkout {basket?.length} items
                    </Link>
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>123 React Rd.</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <h3>Review items for delivery</h3>
                    <div className={"payment_items"}>
                        {basket.map(item => <CheckoutItem 
                            id={item.id} 
                            title={item.title} 
                            imageUrl={item.imageUrl}
                            price={item.price}
                            rating={item.rating}
                        />)}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <h3>
                                    Order Total: <NumberFormat
                                        value={getBasketTotal(basket).toString()}
                                        displayType="text"
                                        thousandsGroupStyle="lakh"
                                        thousandSeparator={true}
                                    />
                                </h3>
                            </div>
                            <button disabled ={processing || disabled || succeeded} type="submit">
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
