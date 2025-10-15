import './description-fourth-screen.css';
import coffeeBeans3 from '../../icons/coffee-beans-3.svg'
import CoffeeFourthScreen from '../../images/coffee-FourthScreen.png'

const DescriptionFourthScreen = () => {
    return (
        <div className="description-screen-second">
            <img className="description-screen-second__image" src={CoffeeFourthScreen} alt="woman" />
            <div className="description-screen-second__content">
                <h2 style={{fontWeight: 'lighter', margin: '0 0 20px 78px'}}>About our goods</h2>
                <div className="description-screen-second__beans">
                    <div className="description-screen-first-line"></div>
                    <img src={coffeeBeans3} alt='coffee beans'></img>
                    <div className="description-screen-first-line"></div>
                </div>
                <div className="description-screen-second__text">
                    <p style={{marginBottom: 20}}>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
so questions.  </p>
                    <p>As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.</p>
                </div>
                <div className="description-screen-second__line-down"></div>
            </div>
        </div>
    )
}

export default DescriptionFourthScreen