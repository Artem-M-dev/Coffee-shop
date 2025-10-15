import './products-screen-first.css'
import ProductsFirstScreenCoffeeBeans1 from '../../../icons/products-screen-first__icons/coffee-beans1.png'
import ProductsFirstScreenCoffeeBeans2 from '../../../icons/products-screen-first__icons/coffee-beans2.png'
import ProductsFirstScreenCoffeeBeans3 from'../../../icons/products-screen-first__icons/coffee-beans3.png'


const ProductsScreenFirst = () => {
    return (
        <div className="products-screen-first">
            <h2 className="products-screen-first__title">Our best</h2>
            <div className="products-screen-first__content">
                <div className="products-screen-first__content-card">
                    <img src={ProductsFirstScreenCoffeeBeans1} alt="coffee beans" />
                    <div className="products-screen-first__content-text">Solimo Coffee Beans 2 kg</div>
                    <div className="products-screen-first__content-price">10.73$</div>
                </div>
                <div className="products-screen-first__content-card">
                    <img src={ProductsFirstScreenCoffeeBeans2} alt="coffee beans" />
                    <div className="products-screen-first__content-text">Presto Coffee Beans 1 kg</div>
                    <div className="products-screen-first__content-price">15.99$</div>
                </div>
                <div className="products-screen-first__content-card products-screen-first__content-card-c">
                    <img src={ProductsFirstScreenCoffeeBeans3} alt="coffee beans" />
                    <div className="products-screen-first__content-text">AROMISTICO Coffee 1 kg</div>
                    <div className="products-screen-first__content-price">6.99$</div>
                </div>
            </div>
        </div>
    )
}

export default ProductsScreenFirst