import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeData = () => {
    const moneyUnit='TRY'
    const [exchangeData, setExchangeData] = useState([]);
    
    const fetchExchangeData = async () => {
        const response = await axios.get(
            `https://api.exchangeratesapi.io/history?start_at=2018-08-01&end_at=2018-09-01&symbols=${moneyUnit},USD`
        );
        if(response.status === 200) {
            setExchangeData(response.data);
        }
    };

    useEffect(() => {
        fetchExchangeData();
    }, []);
    console.log(exchangeData);
    return exchangeData;
}

export default useExchangeData;