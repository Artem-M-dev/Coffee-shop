// import Header from '../header/header';
import MainScreenFirst from '../main-screen-first/main-screen-first';
import DescriptionScreenFirst from '../description-screen-first/description-screen-first';
import ProductsScreenFirst from '../products-screen-first/products-screen-first';
import Footer from '../footer/footer';

import './app.css'

const App = () => {
    return (
        <>
            <div className='mainFirstScreen'>
                <MainScreenFirst></MainScreenFirst>
                <DescriptionScreenFirst></DescriptionScreenFirst>
                <ProductsScreenFirst></ProductsScreenFirst>
                <Footer></Footer>
            </div>
        </>
    )
}

export default App