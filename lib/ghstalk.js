const axios = require("axios");

function ghstalk(username) {
url= `https://api.github.com/users/${username}`; 
return axios.get(url)
.then(data => {
return data.data
})
}

module.exports = { ghstalk };