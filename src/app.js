
// 2-8-24: This is a simple axios get method that ran and worked
/*axios.get("https://api.statorium.com/api/v1/leagues/1/?apikey=0dc62921775ba39d7c2d0f630699b5c4").then((res) => {
  console.log("RESPONSE: ", res);
});*/

// 2-8-24 here I'm taking the axios get method and putting it into an async function


const apikey = "0dc62921775ba39d7c2d0f630699b5c4";
const seasonID = "252";
const config = { params: { apikey: apikey, season_id: seasonID } };
const team = "8";


// 2-12-24 used the config object to pass the apikey and seasonID to the get request
// Also included String template literals to pass the team variable into the get request
const getLeague = async () => {
  const response = await axios.get(`https://api.statorium.com/api/v1/teams/${team}`, config);

  //here is here I'm using the config object to pass the apikey and seasonID to the get request
  //const response = await axios.get("https://api.statorium.com/api/v1/teams/8?season_id=252&apikey=0dc62921775ba39d7c2d0f630699b5c4");
  console.log("RESPONSE: ", response);
}
  getLeague();
