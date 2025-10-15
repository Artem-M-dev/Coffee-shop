import MainScreenFirst from '../first-screen/main-screen-first/main-screen-first';
import DescriptionScreenFirst from '../first-screen/description-screen-first/description-screen-first';
import ProductsScreenFirst from '../first-screen/products-screen-first/products-screen-first';
import Footer from '../footer/footer';

const FirstScreen = () => {
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

export default FirstScreen