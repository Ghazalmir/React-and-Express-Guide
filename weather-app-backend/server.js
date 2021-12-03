const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

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
	const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3d91437e125cc0c0d8b8654307cd15cf&units=metric`;
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
    const apiEndpoint = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=a051de823b0b4ad8aaca00e7b0561929&days=7`

    try {
        const apiResponse = await axios.get(apiEndpoint);
        res.json(apiResponse.data);
    }
    catch (e) {
        console.log(e, "forecaset error");
    }
})

app.get("/location-info", async (req, res) => {
	try {
		const apiResponse = await axios.get("http://ip-api.com/json/");
		res.json(apiResponse.data);
	}
	catch (e) {
		console.log(e);
	}
})


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
