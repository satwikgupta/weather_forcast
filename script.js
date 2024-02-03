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

		CO_concentration.innerHTML = result.CO.concentration
		NO2_concentration.innerHTML = result.NO2.concentration
		O3_concentration.innerHTML = result.O3.concentration
		SO2_concentration.innerHTML = result.SO2.concentration
		PM2_concentration.innerHTML = result["PM2.5"].concentration
		PM10_concentration.innerHTML = result.PM10.concentration
		
		
		CO_aqi.innerHTML = result.CO.aqi
		NO2_aqi.innerHTML = result.NO2.aqi
		O3_aqi.innerHTML = result.O3.aqi
		SO2_aqi.innerHTML = result.SO2.aqi
		PM2_aqi.innerHTML = result["PM2.5"].aqi
		PM10_aqi.innerHTML = result.PM10.aqi
		Overall_aqi.innerHTML = result.overall_aqi
	  


	} catch (error) {
		console.error(error);
	}
}

submit.addEventListener('click', (e)=>{
	e.preventDefault();
	if(city.value)
		fetchData(city.value);
	// else 
	// 	error_city = "Not a valid City name"
})

fetchData("Delhi");