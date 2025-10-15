import './footer.css';
import '../first-screen/description-screen-first/description-screen-first.css';
import '../header/header.css'
import coffeeBeans3 from '../../icons/coffee-beans-3.svg';
import coffeeBeans4 from '../../icons/coffee-beans4.svg'


const Footer = () => {
    return (
        <>
            <div className="footer">
                <img className="footer-img" src={coffeeBeans4} alt="coffee beans" />
                <div>Coffee house</div>
                <div>Our coffee</div>
                <div>For your pleasure</div>
            </div>

            <div className="description-screen-first-beans">
                <div className="description-screen-first-line"></div>
                <img src={coffeeBeans3} alt='coffee beans'></img>
                <div className="description-screen-first-line"></div>
            </div>
        </>
    )
}

export default Footer