var axios = require('axios')

axios.get('http://www.google.fr')
    .then(function(response) {
        console.log('google ->' + response.status);
    })
    .catch(function(error) {
        console.log(error);
    });

axios.get('http://www.facebook.fr')
    .then(function(response) {
        console.log('facebook ->' + response.status);
    })
    .catch(function(error) {
        console.log(error);
    });

axios.get('http://www.twitter.fr')
    .then(function(response) {
        console.log('twitter ->' + response.status);
    })
    .catch(function(error) {
        console.log(error);
    });

var http = require('http')

http.get({
    hostname: 'www.twitter.fr6',
    port: 80,
    path: '/',
    agent: false // create a new agent just for this one request
}, function(res, error) {
    console.log('res', res)
    console.log('error', error)
});