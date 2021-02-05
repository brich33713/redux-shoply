import data from './data.json'

const INITIAL_STATE = {products: data.products, cart:[]};

const RootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newCart = [...state.cart,action.props]
            return {...state,cart:newCart}
        
        case 'REMOVE_FROM_CART':
            let remaining;
            const idx = state.cart.findIndex(item => item.name === action.props)
            if(idx === 0 && state.cart.length === 1){
                 remaining = []
                 return {...state,cart:remaining}
            } else if(idx !== -1){
                
                remaining = [...state.cart]
                remaining.splice(idx,1)
                return {...state,cart:remaining}
            }
        
        default:
            break;
    }
    return state
}

export default RootReducer;
