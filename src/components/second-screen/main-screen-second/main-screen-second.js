import Header from "../../header/header";
import './main-screen-second.css';
import MainScreen from "../../main-screen/main-screen";

const MainScreenSecond = () => {

    return (
        <div className="main-screen-second">

            <MainScreen style={{
                            width: 'fit-content',
                            margin: '60px auto 0 auto',
                            color: 'white',
                            fontSize: 40
                        }}
                        title='Our Coffee'></MainScreen>
        </div>

        
    )
}

export default MainScreenSecond