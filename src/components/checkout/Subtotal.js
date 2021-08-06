import React from 'react'
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../context/Reducer';
import { useContextValue } from '../../context/Provider';
import './Subtotal.css'


const Subtotal = ({basket}) => {

    const [{user}, dispatch] = useContextValue();

    const history = useHistory();

    return (
        <div className="subtotal">
            <p>Subtotal: ({basket.length} items):{` `}
                <strong>
                    <NumberFormat
                        value={getBasketTotal(basket).toString()}
                        displayType="text"
                        thousandsGroupStyle="lakh"
                        thousandSeparator={true}
                    />
                </strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"/> This order contains a gift
            </small>
            
            {user ? <button className="btn" onClick={()=>history.push("/payment")}>
                Proceed to Checkout
            </button> :
            <button className="btn" onClick={()=>history.push("/login")}>
                Sing-In to Checkout
            </button>}
        </div>
    )
}

export default Subtotal
