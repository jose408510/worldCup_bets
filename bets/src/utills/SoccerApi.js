import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getGames: function() {
    return axios.get("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json");
  }
};
