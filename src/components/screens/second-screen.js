import MainScreenSecond from "../second-screen/main-screen-second/main-screen-second";
import DescriptionScreenSecond from "../second-screen/description-screen-second/description-screen-second";
import InputScreenSecond from "../second-screen/input-screen-second/input-screen-second";
import ProductsScreenSecond from "../second-screen/products-screen-second/products-screen-second";
import Footer from "../footer/footer";

const SecondScreen = () => {
    return (
        <>
            <MainScreenSecond></MainScreenSecond>
            <DescriptionScreenSecond></DescriptionScreenSecond>
            <InputScreenSecond></InputScreenSecond>
            <ProductsScreenSecond></ProductsScreenSecond>
            <Footer></Footer>
        </>
    )
}

export default SecondScreen