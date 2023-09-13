const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use((req,res,next) => {
	res.header("Access-Control-Allow-Origin", '*');
	next();
});


app.get("/", (req, res) => {
	res.send("Express here!");
});

app.post("/weather-info", async (req, res) => {
	let latitude = req.body.latitude;
	let longitude = req.body.longitude;
	const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
	try {
		const apiResponse = await axios.get(apiEndpoint);
		res.json(apiResponse.data);
	} catch (e) {
		console.log(e, "weather error");
	}
    res.end();
});

app.post("/forecast-info", async (req, res) => {
	let latitude = req.body.latitude;
	let longitude = req.body.longitude;
	const apiEndpoint = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${process.env.FORECAST_API_KEY}&days=7`;

    try {
        const apiResponse = await axios.get(apiEndpoint);
        res.json(apiResponse.data);
    }
    catch (e) {
        console.log(e, "forecaset error");
    }
})


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
