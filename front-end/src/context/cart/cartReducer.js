export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const exist = state.cart.find(product => product.id === action.payload.id);
            
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map(product =>
                        product.id === action.payload.id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }

        case 'REMOVE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload),
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };

        case 'INCREASE_QUANTITY':
            return {
                ...state, 
                cart: state.cart.map(product => product.id === action.payload ? { ...product, quantity: product.quantity + 1} : product)
            }
    
        case 'DECREASE_QUANTITY':
            return {
                ...state, 
                cart: state.cart.map(product => product.id === action.payload ? { ...product, quantity: product.quantity - 1} : product)
            }

        default:
            return state;
    }
};
