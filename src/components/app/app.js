import FirstScreen from '../screens/first-screen';
import SecondScreen from '../screens/second-screen';
import ThrirdScreen from '../screens/third-screen';
import FourthScreen from '../screens/fourth-screen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css'

const App = () => {

    const data = [
        {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`},
        {type: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: `${6.99}$`},
        {type: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: `${6.99}$`},
        {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`},
        {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`},
        {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`},
    ]
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstScreen />} />
                <Route path="/second" element={<SecondScreen data={data} />} ></Route>
                <Route path="/third" element={<ThrirdScreen />} ></Route>
                <Route path="/fourth" element={<FourthScreen data={data} />} ></Route>
            </Routes>
        </Router>
    )
}

export default App