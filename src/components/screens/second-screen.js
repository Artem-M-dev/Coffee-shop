import MainScreenSecond from "../second-screen/main-screen-second/main-screen-second";
import DescriptionScreenSecond from "../second-screen/description-screen-second/description-screen-second";
import InputScreenSecond from "../second-screen/input-screen-second/input-screen-second";
import ProductsScreenSecond from "../second-screen/products-screen-second/products-screen-second";
import Footer from "../footer/footer";
import MainScreen from "../main-screen/main-screen";

const SecondScreen = ({data}) => {
    return (
        <> 
            <MainScreenSecond></MainScreenSecond>
            <DescriptionScreenSecond></DescriptionScreenSecond>
            <InputScreenSecond></InputScreenSecond>
            <ProductsScreenSecond data={data} margin='60px auto 0 auto'></ProductsScreenSecond>
            <Footer></Footer>
        </>
    )
}

export default SecondScreen