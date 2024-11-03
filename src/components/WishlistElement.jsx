import React from 'react';
import { useStateValue } from './StateProvider';
import '../assets/CSS/WishlistElement.css';

function WishlistElement({ id, Title, Price, Rating, Image }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        console.log('Remove from basket clicked');
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
                Title: Title,
                Price: Price,
                Rating: Rating,
                Image: Image
            }
        })
        console.log(basket);
    }
    return (
        <div className="WishlistElement">
            <img 
                src={Image} 
                className="WishlistElement__Image" 
                alt="..." 
            />
            <div className="WishlistElement__Card card">
                <div className="card-body">
                    <h2 className="WishlistElement__CardTitle">{Title}</h2>
                    <div className="WishElement__CardRating">{Rating}</div>
                    <div className="WishElement__CardPrice">Rs. {Price}</div>
                </div>
                <div className="WishElement__RemoveCard card-footer">
                    <button onClick={removeFromBasket}>Remove From Wishlist</button>
                </div>

            </div>
        </div>
    )
}

export default WishlistElement