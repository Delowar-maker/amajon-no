import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    return (
        <div>
            {/* <h1>{productKey}Product Detail comming soon</h1> */}
            <h1>Product Detail</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;