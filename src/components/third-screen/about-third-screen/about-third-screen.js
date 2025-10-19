import './about-third-screen.css';
import aromistico from '../../../images/aromistico_third-screen.jpg';
import Title from '../../title/title';

const AboutThirdScreen = () => {
    return (
        <div className="about-third-screen">
            <img style={{boxShadow: "10px 3px 10px rgba(0, 0, 0, 0.1)"}} className="about-third-screen__img" src={aromistico} alt="coffee" />

            <div className="about-third-screen__content">
                <div className="about-third-screen__head">
                    <Title style={{fontWeight: 'lighter'}} title="About it"></Title>
                </div>
                <div className="about-third-screen__country"><span>Country: </span>Brasil</div>
                <p className="about-third-screen__description"><span>Description: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="about-third-screen__price">Price: <span>16.99$</span></div>
            </div>
        </div>
    )
}

export default AboutThirdScreen