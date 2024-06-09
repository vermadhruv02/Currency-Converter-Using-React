import { useEffect, useState } from 'react' ;

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json[currency]))
        .catch(err => console.log(`useCurrencyInfo ERROR: ${err}`))
    },[currency]);
    return data
}

export default useCurrencyInfo;