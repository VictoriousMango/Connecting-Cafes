import React from 'react';
import WishlistElement from './WishlistElement';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import '../assets/CSS/Wishlist.css';

function Wishlist() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="Wishlist">
        <div className="Wishlist__Left">
            {/* <img src="../public/Wishlist_Banner.jpeg" alt="" className="Wishlist__LeftBanner" /> */}
            <div className="Wishlist__LeftCards">
                <h2>Wishlist will be shown here</h2>
                {
                  basket.map((item) => (
                    <WishlistElement
                    id={item.id}
                    Rating={item.Rating}
                    Image={item.Image}
                    Title={item.Title}
                    Price={item.Price}
                    />
                  ))
                }
                {/* <WishlistElement />
                <WishlistElement /> */}
            </div>
        </div>
        <div className="Wishlist__Right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Wishlist