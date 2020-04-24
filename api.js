const axios = require('axios');

// curl - H "Accept: application/json" - u username: password \
const url = 'https://api.carbonkit.net/3.6/categories/'
const username = '';
const password = '';


// use http basic authentication by passing a second parameter after the url
axios.get(url, {
    auth: {
        username: username,
        password: password
    },
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })