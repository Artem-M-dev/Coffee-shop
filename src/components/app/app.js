// import Header from '../header/header';
import MainScreenFirst from '../main-screen-first/main-screen-first';
import DescriptionScreenFirst from '../description-screen-first/description-screen-first';

import './app.css'

const App = () => {
    return (
        <>
            <div className='mainFirstScreen'>
                <MainScreenFirst></MainScreenFirst>
                <DescriptionScreenFirst></DescriptionScreenFirst>
            </div>
        </>
    )
}

export default App