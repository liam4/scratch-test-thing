var user = location.href.match(/users\/([^/]*)\//)[1];

var url = '//liam4.github.io/scratch-test-thing';

// Helper function to fetch JSON:
var fetchJSON = function(u) {
  return fetch(u)
    .then(r => r.text())
    .then(t => JSON.parse(t));
};

var fetchData = function(user) { return (

  // Fetch the list of available user data.
  fetchJSON(`${url}/data.json`)

  // Check if data is available for the given user or not.
  // If not, throw an error.
  .then(data => {
    if (!data.users.includes(user)) throw 'No data for user';
  })

  // If there is data for the user:
  .then(() =>

    // Fetch the data for the given user.
    fetchJSON(`${url}/users/${user}.json`)

  )

)};

fetchData(user).then(data => {
  console.log('Customizing based on data', data);
  var wrapper = document.getElementById('pagewrapper');
  wrapper.style.backgroundImage = `url(${url}/${data.background_image})`;
  console.log('okay!');
});










