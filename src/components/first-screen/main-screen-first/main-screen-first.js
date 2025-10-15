import './main-screen-first.css';
import Header from '../../header/header'
import coffeeBeans2 from '../../../icons/coffee-beans-2.svg'


const MainScreenFirst = () => {
    return (
        <div className="firstScreenMain">
            <Header></Header>
            <div className="firstScreenMain-content">
                <h1 className=" first-screen__title firstScreenMain__main-title">Everything You Love About Coffee</h1>
                <div className="firstScreenMain-beans">
                    <div className="firstScreenMain-line"></div>
                    <img src={coffeeBeans2} alt='coffee beans'></img>
                    <div className="firstScreenMain-line"></div>
                </div>
                <h2 className=" first-screen__title firstScreenMain__title-h2">We makes every day full of energy and taste</h2>
                <h2 className=" first-screen__title firstScreenMain__title-h2">Want to try our beans?</h2>
                <button className=" first-screen__title firstScreenMain-btn">More</button>
            </div>
        </div>
    )
}

export default MainScreenFirst