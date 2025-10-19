import './header-fourth-screen.css';
import MainScreen from '../../main-screen/main-screen';

const HeaderFourthScreen = () => {
    return (
        <div className="header-fourth-screen">
            <MainScreen title="For your pleasure"
                        style={{
                            color: 'white',
                            width: 'fit-content',
                            margin: '60px auto 64px auto',
                            fontSize: 40
                        }}></MainScreen>
        </div>
    )
}

export default HeaderFourthScreen