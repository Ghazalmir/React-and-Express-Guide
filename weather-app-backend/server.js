const express = require("express");
const axios = require("axios");
const { response } = require("express");

const app = express();
const PORT = 5000;
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=3d91437e125cc0c0d8b8654307cd15cf&units=metric";

app.get("/", (req, res) => {
	res.send("Express here!");
});


app.get("/get-weather-toronto", async (req, res) => {
    try {
        const apiRes = await axios.get(apiEndpoint);
        res.json(apiRes.data.main);
    }
    catch (e) {
        console.log(e);
    }
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

