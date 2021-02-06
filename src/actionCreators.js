import {ADD_TO_CART,REMOVE_FROM_CART} from './actionTypes'

export const addToCart = (props) => ({
    type: ADD_TO_CART,
    props
})

export const removeFromCart = (props) => ({
    type: REMOVE_FROM_CART,
    props
})