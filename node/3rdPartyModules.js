const _ = require("lodash");
//setInterval(() => console.log(_.random(500, 1000)), 1000);

const http = require("http"); // node has this module

http
	.createServer((request, callback) => {
		callback.write("Bom dia!");
		callback.end();
	})
	.listen(8080);
