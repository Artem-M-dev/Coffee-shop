import ProductsScreenSecondItem from '../products-screen-second-item/products-screen-second-item';
import './products-screen-second.css';

const ProductsScreenSecond = ({data, margin, country}) => {

    const newItems = data.filter(item => item.country === country);

    const products = newItems.map(product => {
        return (
            <ProductsScreenSecondItem 
            type={product.type}
            country={product.country}
            price={product.price}
            styleCountry={{
                marginTop: 14,
                fontWeight: 'lighter',
                fontSize: 14
            }}
            stylePrice={{
                marginTop: 14,
                fontWeight: 'bold',
                fontSize: 14
            }}
            styleType={{
                marginTop: 14,
                fontWeight: 'lighter',
                fontSize: 14
            }}
            key={product.id}></ProductsScreenSecondItem>
        )
    })

    return (
        <div className="products-screen-second" style={{margin: margin}}>
            {products}    
        </div>
    )
}

export default ProductsScreenSecond