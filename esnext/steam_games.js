const http = require("http");

const getAPIResponse = (APIKey, steamid) => {
	const url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${APIKey}&steamid=${steamid}&format=json&include_appinfo=true&include_played_free_games=true`;
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let responseData = "";

			res.on("data", (data) => {
				responseData += data;
			});

			res.on("end", () => {
				try {
					resolve(JSON.parse(responseData));
				} catch (e) {
					reject(e);
				}
			});
		});
	});
};

const APIKey = "1D46315AB37302ECFB10E8B9121777AE";
const steamid = "76561198164149223";

const filterByName = (games) => {
	let game_list = [];

	games.forEach((g) => {
		game_list.push(g.name);
	});

	return game_list;
};

getAPIResponse(APIKey, steamid)
	.then((responseData) => responseData.response)
	.then((response) => response.games)
	.then(filterByName)
	.then((games) => games.sort())
	.then((games) => console.log(games));
