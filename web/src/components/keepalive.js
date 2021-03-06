const axios = require("axios");
const dev = process.env.NODE_ENV !== "production";
const site = "https://gdown.herokuapp.com/";

function keepalive() {
  if (site) {
      var refresh = setInterval(async () => {
	      window.console.log("setInterval applied");
	      const data = await axios.get(`https://dpping.herokuapp.com/ping`);
	      window.console.log(data);
	    }, 1560000);
  } else {
    console.log("No torrent to download");
  }
}

export default keepalive;
