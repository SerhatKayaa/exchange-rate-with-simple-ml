import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeData = () => {
    const [data, setData] = useState({ rates: [] });

    const fetchExchangeData = async () => {
        const URL = "https://api.exchangeratesapi.io/history?start_at=2018-08-01&end_at=2018-09-01&symbols=TRY,USD";
        const response = await axios.get(URL);

        if(response.status === 200) {
            setData(response.data);
        }
    }

    useEffect(() => {
        fetchExchangeData();
    }, []) 

    return data.rates;
}

export default useExchangeData;