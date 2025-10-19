import './products-screen-second-item.css';
import AromisticoCoffee from '../../../images/aromistico-coffee.png'

const ProductsScreenSecondItem = ({type, country, price, styleType, styleCountry, stylePrice}) => {
    return (
        <div className="products-screen-second-item">
            <div className="products-screen-second-item__box">
                <img className="products-screen-second-item__box-image" src={AromisticoCoffee} alt="" />
                <h3 className="products-screen-second-item__box-type" style={styleType}>{type}</h3>
                <h3 className="products-screen-second-item__box-country" style={styleCountry}>{country}</h3>
                <div className="products-screen-second-item__box-price" style={stylePrice}>{price}</div>
            </div>
        </div>
    )
}

export default ProductsScreenSecondItem