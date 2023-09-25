const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7c88887a4msh1e2048ba063a89ep189089jsnfefb715af240',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData(city) {
	try {
		cityname.innerHTML = city
		const response = await fetch(url + city, options);
		const result = await response.json();
		console.log(result);

		CO.innerHTML = result.CO.concentration
		NO2.innerHTML = result.NO2.concentration
		O3.innerHTML = result.O3.concentration
		SO2.innerHTML = result.SO2.concentration
		PM2.innerHTML = result["PM2.5"].concentration
		PM10.innerHTML = result.PM10.concentration
		overall_aqi.innerHTML = result.overall_aqi
	  


	} catch (error) {
		console.error(error);
	}
}

submit.addEventListener('click', (e)=>{
	e.preventDefault();
	fetchData(city.value);
})

fetchData("Delhi");