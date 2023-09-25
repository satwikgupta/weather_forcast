const url = 'https://weather-api99.p.rapidapi.com/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7c88887a4msh1e2048ba063a89ep189089jsnfefb715af240',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};
async function fetchData() {
	try {
		
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

fetchData();