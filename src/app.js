
// 2-8-24: This is a simple axios get method that ran and worked
/*axios.get("https://api.statorium.com/api/v1/leagues/1/?apikey=0dc62921775ba39d7c2d0f630699b5c4").then((res) => {
  console.log("RESPONSE: ", res);
});*/


// 2-12-24 assigning my apikey and seasonID to variables
// 2-12-24: I'm using the config object to pass the apikey and seasonID to the get request
const apikey = "0dc62921775ba39d7c2d0f630699b5c4";
const seasonID = "252";
const config = { params: { apikey: apikey, season_id: seasonID } };
// const team = "8";

// 2-12-24: I'm using the FormData object to get the value of the input field
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  //use this to see the elements of the form including the input name
  //console.dir(form);
  
  // 2-12-24: I'm using the FormData object to get the value of the input field
  const team = form.elements.team_id.value;
  // 2-12-24 this shows all the elements of the form
  console.dir(form)
  // Here I'm calling the API and inserting the team variable into the get request and the config
  // It works!!
  const res = await axios.get(`https://api.statorium.com/api/v1/teams/${team}`, config);
  console.log(res.data)

});




/* // 2-12-24 used the config object to pass the apikey and seasonID to the get request
// Also included String template literals to pass the team variable into the get request
const getLeague = async () => {
  const response = await axios.get(`https://api.statorium.com/api/v1/teams/${team}`, config);

  //here is here I'm using the config object to pass the apikey and seasonID to the get request
  //const response = await axios.get("https://api.statorium.com/api/v1/teams/8?season_id=252&apikey=0dc62921775ba39d7c2d0f630699b5c4");
  console.log("RESPONSE: ", response);
}
  getLeague();
 */