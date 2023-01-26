async function dataLoad(currencyOne, currencyTwo) {
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currencyOne}&to_currency=${currencyTwo}&apikey=GPC9UGIE9X6VAHJ0`;
    const response = await fetch(url); 
    const data = await response.json();
    console.log(data);
    return data;
}

