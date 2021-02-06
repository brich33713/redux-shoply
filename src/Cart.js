import react from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {addToCart,removeFromCart} from './actionCreators'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart)
    let productArray = cart.map(product => product.name)
    let itemArray = []
    let total = 0;



    for(let product of cart){
        
        //checks if item is already in array, if not adds, and gets count
        let idx = itemArray.findIndex(item => item.name === product.name)
        if(idx === -1){
            let count = 0;
            //gets item count
            for(let i = 0; i < productArray.length; i++){
                if(product.name === productArray[i]){
                    
                    count++;
                }
            }
            itemArray.push({...product,count})
        }

        //gets total cart price
        total += product.price
    }

    let itemCount = 0;
    for(let item of itemArray){
        itemCount += item.count
    }
    

    const handleClick = (e) => {
        e.preventDefault()
        //gets button text to determine if adding or removing
        if(e.target.innerText === 'Add'){
            let index = cart.findIndex(item => item.name === e.target.name)
            let product = cart[index]
            dispatch(addToCart(product))
        } else {
            dispatch(removeFromCart(e.target.name))
        }
    }
    
    return(
        <div>
            <div>
                <Link exact to="/">Home</Link>
                <h1>Total Items in Cart: {itemCount}</h1>
                <h1>Total: ${total.toFixed(2)}</h1>
            </div>
            
            {itemArray.map(product => (
            <div style={{width:`30%`,float:`left`,margin:`1.66px`}}>
                <h1>{product.name}</h1>
                <img src={product.image_url} alt={product.name} width='100px' height='100px' />
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div>
                    <button name={product.name} onClick={handleClick}>Add</button>
                </div>
                <div>
                    <button name={product.name} onClick={handleClick}>Remove</button>
                </div>
                <div>
                    <h2>Num in Cart: {product.count}</h2>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Cart;