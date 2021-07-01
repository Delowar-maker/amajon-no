import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const frist10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(frist10);
    const [cart, setCart] = useState([]);
    //new
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const PriviousCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(PriviousCart)

    },[])

    const handleAddProduct = (product) => {
        //new NNA proplem slove
        const sameProduct = cart.find(pd => pd.key === product.key);
        const toBeAddedKey = product.key;
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key  !== toBeAddedKey)
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // const count = sameProduct.length;

        //console.log('addd', product);
        // const newCart = [...cart, product];
        setCart(newCart);
        //  const sameProduct = newCart.filter(pd => pd.key === product.key);
        //  const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                    key={pd.key}
                    showAddToCart={true}
                        product={pd}
                        handleAddProduct={handleAddProduct}
                    >

                    </Product>)
                }

            </div>
            <div className="cart-container">
                {/* <h3>This is cart</h3>
                <h5>Order sammary:  {cart.length}</h5> */}
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className="main-button">Review Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;