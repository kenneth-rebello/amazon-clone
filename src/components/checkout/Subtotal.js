import React from 'react'
import NumberFormat from 'react-number-format';
import './Subtotal.css'


const Subtotal = ({basket}) => {

    const total = basket.reduce((currentTotal, currentItem) => currentTotal + currentItem.price, 0);

    return (
        <div className="subtotal">
            <p>Subtotal: ({basket.length} items):{` `}
                <strong>
                    <NumberFormat
                        value={total.toString()}
                        displayType="text"
                        thousandsGroupStyle="lakh"
                        thousandSeparator={true}
                    />
                </strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"/> This order contains a gift
            </small>
            <button className="btn">Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
