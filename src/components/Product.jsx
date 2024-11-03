import React from 'react';
import { useStateValue } from './StateProvider';
import '../assets/CSS/Product.css';

function Product({ id, Title, Price, Rating, Image }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log("This is the basket >>>>", basket);
    const addToBasket = () => {
        // Dispatch the item into data layer
        // console.log("Initializing Dispatch");
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                Title: Title,
                Price: Price,
                Rating: Rating,
                Image: Image
            }
        })
    }
    return (
        <div className="product">
            {/* Product Info */}
            <div className="product__info">
                <p>
                    {Title}

                </p>
            </div>

            {/* Product Price */}
            <div className="product__price">
                Rs. {Price}
            </div>

            {/* Product Rating */}
            <div className="product__rating">
                {Rating}
            </div>

            {/* Product Image */}
            < img src={Image} alt="" className="product__image" />

            {/* Add to cart button */}
            < div className="product__addToCart" >
                <button className="product__addToCartButton" onClick={addToBasket}>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product