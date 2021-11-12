const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
	res.send("Express here!");
});

app.get("/get-weather-toronto", (req, res) => {
	res.send("[insert toronto weather from 3rd party API]");
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
