import react from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Products = () => {
    const products = useSelector(store => store.products)
    const cart = useSelector(store => store.cart)
    let productData = []

    //loops over productData array to create object with route and product name
    for(const product in products){
        productData.push({name: products[`${product}`].name,route:`/products/${product}`})
    }
    
    return (
        <div>
            <h1>Products</h1>
            <p>Items in Cart: <Link exact to="/cart">{cart.length}</Link></p>
            {productData.map(product => <p><Link exact to={product.route}>{product.name}</Link></p>)}
        </div>
    )
}

export default Products;