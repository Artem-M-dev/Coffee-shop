import './header.css';
import coffeeBeans from '../../icons/coffee-beans.svg'

const Header = () => {
    return (
        <div className="header">
            <img className="header-img" src={coffeeBeans} alt="coffee beans" />
            <div>Coffee house</div>
            <div>Our coffee</div>
            <div>For your pleasure</div>
        </div>
    )
}

export default Header