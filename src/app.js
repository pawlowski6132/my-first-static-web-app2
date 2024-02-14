
// 2-8-24: This is a simple axios get method that ran and worked
/*
axios.get("https://api.statorium.com/api/v1/leagues/1/?apikey=0dc62921775ba39d7c2d0f630699b5c4").then((res) => {
  console.log("RESPONSE: ", res);
});
*/


// 2-12-24 assigning my apikey and seasonID to variables
// 2-12-24: I'm using the config object to pass the apikey and seasonID to the get request
const apikey = "0dc62921775ba39d7c2d0f630699b5c4";
const seasonID = "252";
const config = { params: { apikey: apikey, season_id: seasonID } };


// 2-12-24: I'm using the FormData object to get the value of the input field
// Ref #250 Video for 'querySelector'
// Ref #263 'Event Listener' method. See: MDN EventTarget.addEventListener()for list of events.
// Ref #285 'The Async Keyword'

// A form was created on the HTML page and given an ID of 'searchForm', i'm referencing that and assigning it to a variaable 'form'
const form = document.querySelector('#searchForm');

// Called the EvneListener method on the form to listen to a Submit event.
// Why does this work? Don't I have to listen to the event on the button????
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  
  // 2-12-24: I'm using the FormData object to get the value of the input field
  // team_id is the name of the input box and we are getting the value of what was entered and assigning it
  // to the team variable.

  // Ref #301 TV Show Search example
  const team = form.elements.team_id.value;
  // 2-12-24 this shows all the elements of the form
  console.dir(form)

  // Here I'm calling the API and inserting the team variable into the get request and the config
  
  // Ref #286 'The Await Keyword'
  // Ref #160 'String Template Literals'
  
  const res = await axios.get(`https://api.statorium.com/api/v1/teams/${team}`, config);
  // console.log(res.data)
  
  // Ref #291 'WTF is JSON' If Results begin/end with {...} result is JSON object; [...], Array Text
  // Ref #189 'Object Literals'
  // Ref #191 'Accessing data out of Objects'
  // Ref #205 'Iterating over Objects'
  // Ref #228 'Intro to Arrow Functions'
  
  // Axios library SPECIFICALLY formats the res.data to JSON
  // When calling the API the server will return a JSON object already formatted because I'm using AXIOS
  // Within the res data object (res is defined by Axios and is a constant) there is a data property already named and constant
  // team.players are named part of the returned data object
  // the forEach method iterates through each entry under players and executes the function below
  
  res.data.team.players.forEach(player_man => {
    //console.log(player.fullName);
    //console.log(player.photo);

    // this creates an image tag
    const img = document.createElement('img');
    
    // assignes the value of the photo from the JSON object of players which is an image URL
    img.src = player_man.photo;

    // add the image to the HTML document
    document.body.append(img);

//delete this comment 2/13/2
//delete this comment 2/13/24 again from Panera
//delete this comment 2/14/24 again from Panera incorporated

//use Map to create a NEW array with just players and/or positions



});

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