import React from 'react';
import Header from '../containers/Header';
import Chart from './Chart';
import useExchangeData from './useExchangeData';


const App = () => {
    return (
        <div>
           <Header />
            <Chart />
        </div>
    );
}

export default App;