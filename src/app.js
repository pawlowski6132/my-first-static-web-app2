
// 2-8-24: This is a simple axios get method that ran and worked
/* axios.get("https://api.statorium.com/api/v1/leagues/1/?apikey=0dc62921775ba39d7c2d0f630699b5c4").then((res) => {
  console.log("RESPONSE: ", res);
}); */

// 2-8-24 here I'm taking the axios get method and putting it into an async function
const getLeague = async () => {
  const response = await axios.get("https://api.statorium.com/api/v1/leagues/1/?apikey=0dc62921775ba39d7c2d0f630699b5c4");
  console.log("RESPONSE: ", response);
}

getLeague();

