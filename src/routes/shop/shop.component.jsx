import { useContext } from "react";
import './shop.styles.scss';

import ProductCard from '../../components/product-card/product-card.component';
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
    const {products} = useContext(ProductsContext);


    
    return (
        <div className='products-container'>
            {products.map((product) => (
            <div>
                <ProductCard key={product.id} product={product}/>
            </div>
        ))}</div>
    )
}

export default Shop;