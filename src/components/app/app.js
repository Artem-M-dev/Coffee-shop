import FirstScreen from '../screens/first-screen';
import SecondScreen from '../screens/second-screen';
import ThrirdScreen from '../screens/third-screen';
import FourthScreen from '../screens/fourth-screen';

import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`, id: 1},
                {type: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: `${6.99}$`, id: 2},
                {type: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: `${6.99}$`, id: 3},
                {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`, id: 4},
                {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`, id: 5},
                {type: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: `${6.99}$`, id: 6},        
            ],
            filter: 'Brazil'
        }
    }

    filterValue = (country) => {
        this.setState({
            filter: country
        })
    }

    render() {
        const {data, filter} = this.state

        return (
            <Router>
                <Routes>
                    <Route path="/" element={<FirstScreen />} />
                    <Route path="/second" element={<SecondScreen data={data} filterValue={this.filterValue} filter={filter}/>} ></Route>
                    <Route path="/third" element={<ThrirdScreen />} ></Route>
                    <Route path="/fourth" element={<FourthScreen data={data} />} ></Route>
                </Routes>
            </Router>
        )
    }
    
    
}

export default App