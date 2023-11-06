const url = 'https://binance43.p.rapidapi.com/avgPrice?symbol=ETHUSDT';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f90e3fb7b2msh1e0cfd3590aef71p1b8a18jsna7a59b63f845',
		'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
	}
};


(async function fn (){
    const response = await fetch(url, options);
	const result = await response.json();
    try {
        let PrecioEth;
        const precio = result.price
        console.log(Number(precio).toFixed(2))

    } catch (error) {
        console.error(error);
    }
})()



