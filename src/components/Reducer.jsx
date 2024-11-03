export const initialState = {
    basket: []
};

const reducer = (state, action) => {
    // console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'REMOVE_FROM_BASKET':
            // console.log("Triggered Remoce From Basket Case");
            const removeIndex = state.basket.findIndex((basketItem) => (
                basketItem.id === action.item.id
                // console.log(basketItem.id, action.item.id, basketItem.id === action.item.id);
            ))
            console.log(removeIndex)
            let newBasket = [...state.basket];
            if (removeIndex >=0){
                newBasket.splice(removeIndex, 1);
            }
            else {
                console.warn("Following Item is not present in the wishlist : ", action.item.id)
            }
            return {
                ...state, 
                basket: newBasket
            };

        default:
            return state;
    }
};

export default reducer;
