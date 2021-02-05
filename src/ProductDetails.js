import react from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes'

const ProductDetails = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const cart = useSelector(store => store.cart)
    const {id} = useParams()
    const product = products[id]
    
    //uses button text to determine whether type is add or remove
    const handleClick = (e) => {
        e.preventDefault()
        if(e.target.innerText === 'Add to Cart'){
        dispatch({type: ADD_TO_CART,props:product})
        } else {
            dispatch({type: REMOVE_FROM_CART,props:product.name})
        }
    }

    const countArray = cart.map(item => item.name)
    let count = 0
    for(let i = 0; i < countArray.length; i++){
        if(product.name === countArray[i]){
            count++;
        }
    }
    
    return(
        <div style={{alignSelf: 'center'}}>
            <div><Link exact to="/">Home</Link></div>
            <div><Link exact to="/cart">Cart</Link></div>
            <h3>{product.name}</h3>
            <img src={product.image_url} alt={product.name} width='100px' height='100px' />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleClick}>Add to Cart</button>
            <div>
                <button onClick={handleClick}>Remove</button>
            </div>
            <div>
                <h2>Total # of {product.name} in Cart: {count}</h2>
                <h2>Totals in Cart: {cart.length}</h2>
            </div>
        </div>
    )
}

export default ProductDetails;