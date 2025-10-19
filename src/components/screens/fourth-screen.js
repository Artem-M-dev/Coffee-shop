import HeaderFourthScreen from "../fourth-screen/header-fourth-screen/header-fourth-screen";
import DescriptionFourthScreen from "../fourth-screen/description-fourth-screen/description-fourth-screen";
import ProductsScreenSecond from "../second-screen/products-screen-second/products-screen-second";
import Footer from "../footer/footer";

const FourthScreen = ({data}) => {
    return (
        <>
            <HeaderFourthScreen></HeaderFourthScreen>
            <DescriptionFourthScreen></DescriptionFourthScreen>
            <ProductsScreenSecond data={data} margin="120px auto 0 auto"></ProductsScreenSecond>
            <Footer></Footer>
        </>
    )
}

export default FourthScreen