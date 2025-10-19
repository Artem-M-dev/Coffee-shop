import './description-screen-second.css';
import MaskGroupDescription from '../../../images/Mask-Group3-description.jpg';
import Title from '../../title/title';

const DescriptionScreenSecond = () => {
    return (
        <div className="description-screen-second">
            <img className="description-screen-second__image" src={MaskGroupDescription} alt="woman" />
            <div className="description-screen-second__content">
                <Title style={{fontWeight: 'lighter', margin: '0 0 20px 78px'}} title="About our beans"></Title>
                <div className="description-screen-second__text">
                    <p style={{marginBottom: 20}}>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at.
                        Situation recommend objection do intention
                        so questions. </p>
                    <p>As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
                <div className="description-screen-second__line-down"></div>
            </div>
        </div>
    )
}

export default DescriptionScreenSecond