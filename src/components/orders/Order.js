import React from 'react';
import CheckoutItem from '../checkout/CheckoutItem';
import moment from 'moment';
import './Orders.css';
import NumberFormat from 'react-number-format';

const Order = ({order}) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className="order__id">
                <small>Payment ID: {order.id}</small>
            </p>
            {order.data.basket?.map(item => <CheckoutItem
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                rating={item.rating}
                hideRemoveButton={true}
            />)}
            <h3 className="order__total">
                Order Total: <NumberFormat
                    value={order.data.amount / 100}
                    displayType="text"
                    thousandsGroupStyle="lakh"
                    thousandSeparator={true}
                />
            </h3>
        </div>
    )
}

export default Order
