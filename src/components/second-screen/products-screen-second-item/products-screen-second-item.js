import './products-screen-second-item.css';
import AromisticoCoffee from '../../../images/aromistico-coffee.png'

const ProductsScreenSecondItem = () => {
    return (
        <div className="products-screen-second-item">
            <div className="products-screen-second-item__box">
                <img className="products-screen-second-item__box-image" src={AromisticoCoffee} alt="" />
                <h3 className="products-screen-second-item__box-type" style={{marginTop: 14, fontWeight: 'lighter', fontSize: 14}}>AROMISTICO Coffee 1 kg</h3>
                <h3 className="products-screen-second-item__box-country" style={{marginTop: 14, fontWeight: 'lighter', fontSize: 14}}>Brazil</h3>
                <div className="products-screen-second-item__box-price" style={{marginTop: 14, fontWeight: 'bold', fontSize: 14}}>6.99$</div>
            </div>
        </div>
    )
}

export default ProductsScreenSecondItem