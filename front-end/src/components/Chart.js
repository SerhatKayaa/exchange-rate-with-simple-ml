import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useExchangeData from './useExchangeData';

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
}

const Chart = () => {
    const data = useExchangeData();
    console.log('data', data.rates);
    return (
        <div style={Container}>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

const Container = {
    margin: '30px auto',
    width: '80%'
}

export default Chart;