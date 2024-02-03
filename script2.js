const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7c88887a4msh1e2048ba063a89ep189089jsnfefb715af240',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchData1(city) {
	try {
		cityname.innerHTML = city
		const response2 = await fetch(url2 + city, options2);
		const result2 = await response2.json();
		console.log(result2);

        var sunrise_date = new Date(result2.sunrise * 1000);
        var sunriseString = sunrise_date.toTimeString();
        var sunriseParts = sunriseString.split(' ');

        var sunset_date = new Date(result2.sunset * 1000);
        var sunsetString = sunset_date.toTimeString();
        var sunsetParts = sunsetString.split(' ');

		cloud_pct.innerHTML = result2.cloud_pct
        feels_like.innerHTML = result2.feels_like
        humidity2.innerHTML = result2.humidity
        humidity.innerHTML = result2.humidity
        max_temp.innerHTML = result2.max_temp
        min_temp.innerHTML = result2.min_temp
        sunrise.innerHTML = sunriseParts[0]
        sunset.innerHTML = sunsetParts[0]
        temp.innerHTML = result2.temp
        wind_degrees.innerHTML = result2.wind_degrees
        wind_speed.innerHTML = result2.wind_speed
        


	} catch (error) {
		console.error(error);
	}
}

submit.addEventListener('click', (e)=>{
	e.preventDefault();
    city.value && fetchData1(city.value);
})
fetchData1("Delhi");

document.getElementById("topDelhi").addEventListener('click', ()=>{
    fetchData1("Delhi");
})
document.getElementById("topVaranasi").addEventListener('click', ()=>{
    fetchData1("Varanasi");
})

document.getElementById("topKolkata").addEventListener('click', ()=>{
    fetchData1("Kolkata");
})





async function mumbai(city) {
	try {
		const mumbai = await fetch(url2 + city, options2);
		const resultmum = await mumbai.json();
		console.log(resultmum);

        var sunrise_date = new Date(resultmum.sunrise * 1000);
        var sunriseString = sunrise_date.toTimeString();
        var sunriseParts = sunriseString.split(' ');

        var sunset_date = new Date(resultmum.sunset * 1000);
        var sunsetString = sunset_date.toTimeString();
        var sunsetParts = sunsetString.split(' ');


        mum_temp.innerHTML = resultmum.temp;
        mum_hum.innerHTML = resultmum.humidity;
        mum_sunrise.innerHTML = sunriseParts[0];
        mum_sunset.innerHTML = sunsetParts[0];
        mum_wind.innerHTML = resultmum.wind_speed;


	} catch (error) {
		console.error(error);
	}
}
mumbai("Mumbai")


async function kolkata(city) {
	try {
		const kolkata = await fetch(url2 + city, options2);
		const resultkol = await kolkata.json();
		console.log(resultkol);

        var sunrise_date = new Date(resultkol.sunrise * 1000);
        var sunriseString = sunrise_date.toTimeString();
        var sunriseParts = sunriseString.split(' ');

        var sunset_date = new Date(resultkol.sunset * 1000);
        var sunsetString = sunset_date.toTimeString();
        var sunsetParts = sunsetString.split(' ');


        kol_temp.innerHTML = resultkol.temp;
        kol_hum.innerHTML = resultkol.humidity;
        kol_sunrise.innerHTML = sunriseParts[0];
        kol_sunset.innerHTML = sunsetParts[0];
        kol_wind.innerHTML = resultkol.wind_speed;


	} catch (error) {
		console.error(error);
	}
}
kolkata("Kolkata")



async function bengaluru(city) {
	try {
		const bengaluru = await fetch(url2 + city, options2);
		const resultben = await bengaluru.json();
		console.log(resultben);

        var sunrise_date = new Date(resultben.sunrise * 1000);
        var sunriseString = sunrise_date.toTimeString();
        var sunriseParts = sunriseString.split(' ');

        var sunset_date = new Date(resultben.sunset * 1000);
        var sunsetString = sunset_date.toTimeString();
        var sunsetParts = sunsetString.split(' ');


        beng_temp.innerHTML = resultben.temp;
        beng_hum.innerHTML = resultben.humidity;
        beng_sunrise.innerHTML = sunriseParts[0];
        beng_sunset.innerHTML = sunsetParts[0];
        beng_wind.innerHTML = resultben.wind_speed;


	} catch (error) {
		console.error(error);
	}
}
bengaluru("Bengaluru")


async function chennai(city) {
	try {
		const chennai = await fetch(url2 + city, options2);
		const resultchen = await chennai.json();
		console.log(resultchen);

        var sunrise_date = new Date(resultchen.sunrise * 1000);
        var sunriseString = sunrise_date.toTimeString();
        var sunriseParts = sunriseString.split(' ');

        var sunset_date = new Date(resultchen.sunset * 1000);
        var sunsetString = sunset_date.toTimeString();
        var sunsetParts = sunsetString.split(' ');


        chen_temp.innerHTML = resultchen.temp;
        chen_hum.innerHTML = resultchen.humidity;
        chen_sunrise.innerHTML = sunriseParts[0];
        chen_sunset.innerHTML = sunsetParts[0];
        chen_wind.innerHTML = resultchen.wind_speed;


	} catch (error) {
		console.error(error);
	}
}
chennai("Chennai")