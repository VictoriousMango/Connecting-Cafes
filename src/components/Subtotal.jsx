import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import '../assets/CSS/Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    let totalPrice = 0
    for (let i in basket){
        totalPrice += Number(basket[i].Price);
    }
  return (
    <div className="Subtotal">
        <CurrencyFormat 
            renderText={(value) => (
                <>
                <h2>
                    Subtotal ( {basket.length} items):
                    <strong>{value}</strong>
                </h2>
                <small className='subtotal__gift'> 
                    <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale = {2}
            value={totalPrice}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"₹"}
        />
    </div>
  )
}

export default Subtotal