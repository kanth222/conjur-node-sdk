var Conjur = require('conjur');

var defaultClient = Conjur.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new Conjur.AuthenticationApi()
var account = "account_example"; // {String} Organization account name
var body = "body_example"; // {String} New password
var opts = {
  'xRequestId': test-id // {String} Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.changePassword(account, body, opts, callback);
api.getAccessToken()