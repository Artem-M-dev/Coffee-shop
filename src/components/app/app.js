import FirstScreen from '../screens/first-screen';
import SecondScreen from '../screens/second-screen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstScreen />} />
                <Route path="/second" element={<SecondScreen />} ></Route>
            </Routes>
        </Router>
    )
}

export default App