const request = require('request');
const qs = require('querystring');
require('dotenv').config();

const url = process.env.GAS_URL;
console.log(url);
//process.exit(-1);

var query = {
  callback: 'abc',
  api_key: 'XXX',
  rows : JSON.stringify([
    [ 10, 'aaa', 'xxx'],
    [ 20, 'bbb', 'xxx']
  ])
  //data_type: 'jsonp',
}
request.get({
  url: url + qs.stringify(query),
  json:true
}, function(err, res, body) {
  if (err) {
    console.log('Error: ' + err.message);
    return;
  }
  //console.log(res);
  console.log(body);
  //var info = JSON.parse(body);
  //console.log(info);
});
