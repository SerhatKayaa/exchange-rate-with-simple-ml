import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useExchangeData from './useExchangeData';

const Chart = () => {
    const data = useExchangeData();

    const dataList = (data) => {
        var tryArray = []
        var usdArray = []
       if(data.length !== 0) {
           console.log(data);
           for( var key in data) {
                tryArray.push(data[key].TRY);
                usdArray.push(data[key].USD);
           }
       }
       return [tryArray, usdArray];
    };

    const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          data: dataList(data)[0]
        },
        {
          data: dataList(data)[1]
        }
        ]
    }

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