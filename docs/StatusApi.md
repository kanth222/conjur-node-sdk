# Conjur.StatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthenticators**](StatusApi.md#getAuthenticators) | **GET** /authenticators | Details about which authenticators are on the Conjur Server
[**getGCPAuthenticatorStatus**](StatusApi.md#getGCPAuthenticatorStatus) | **GET** /authn-gcp/{account}/status | Details whether an authentication service has been configured properly
[**getServiceAuthenticatorStatus**](StatusApi.md#getServiceAuthenticatorStatus) | **GET** /{authenticator}/{service_id}/{account}/status | Details whether an authentication service has been configured properly
[**whoAmI**](StatusApi.md#whoAmI) | **GET** /whoami | Provides information about the client making an API request.



## getAuthenticators

> AuthenticatorsResponse getAuthenticators(opts)

Details about which authenticators are on the Conjur Server

Response contains three members: installed, configured, and enabled.  installed: The authenticator is implemented in Conjur and is available for configuration configured: The authenticator has a webservice in the DB that was loaded by policy enabled: The authenticator is enabled (in the DB or in the ENV) and is ready for authentication 

### Example

```javascript
import Conjur from 'conjur';
let defaultClient = Conjur.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: conjurAuth
let conjurAuth = defaultClient.authentications['conjurAuth'];
conjurAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//conjurAuth.apiKeyPrefix = 'Token';

let apiInstance = new Conjur.StatusApi();
let opts = {
  'xRequestId': test-id // String | Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
};
apiInstance.getAuthenticators(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRequestId** | **String**| Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one.  | [optional] 

### Return type

[**AuthenticatorsResponse**](AuthenticatorsResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth), [conjurAuth](../README.md#conjurAuth), [conjurKubernetesMutualTls](../README.md#conjurKubernetesMutualTls)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGCPAuthenticatorStatus

> AuthenticatorStatus getGCPAuthenticatorStatus(account, opts)

Details whether an authentication service has been configured properly

Once the status webservice has been properly configured and the relevant user groups have been given permissions to access the status webservice, the users in those groups can check the status of the authenticator.  This operation only supports the GCP authenticator  See [Conjur Documentation](https://docs.conjur.org/Latest/en/Content/Integrations/Authn-status.htm) for details on setting up the authenticator status webservice. 

### Example

```javascript
import Conjur from 'conjur';
let defaultClient = Conjur.ApiClient.instance;
// Configure API key authorization: conjurAuth
let conjurAuth = defaultClient.authentications['conjurAuth'];
conjurAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//conjurAuth.apiKeyPrefix = 'Token';

let apiInstance = new Conjur.StatusApi();
let account = dev; // String | The organization account name
let opts = {
  'xRequestId': test-id // String | Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
};
apiInstance.getGCPAuthenticatorStatus(account, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **String**| The organization account name | 
 **xRequestId** | **String**| Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one.  | [optional] 

### Return type

[**AuthenticatorStatus**](AuthenticatorStatus.md)

### Authorization

[conjurAuth](../README.md#conjurAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getServiceAuthenticatorStatus

> AuthenticatorStatus getServiceAuthenticatorStatus(authenticator, serviceId, account, opts)

Details whether an authentication service has been configured properly

Once the status webservice has been properly configured and the relevant user groups have been given permissions to access the status webservice, the users in those groups can check the status of the authenticator.  Supported Authenticators:   - Azure   - OIDC  Not Supported:   - AWS IAM   - Kubernetes   - LDAP  See [Conjur Documentation](https://docs.conjur.org/Latest/en/Content/Integrations/Authn-status.htm) for details on setting up the authenticator status webservice. 

### Example

```javascript
import Conjur from 'conjur';
let defaultClient = Conjur.ApiClient.instance;
// Configure API key authorization: conjurAuth
let conjurAuth = defaultClient.authentications['conjurAuth'];
conjurAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//conjurAuth.apiKeyPrefix = 'Token';

let apiInstance = new Conjur.StatusApi();
let authenticator = authn-oidc; // String | The type of authenticator
let serviceId = prod%2fgke; // String | URL-Encoded authenticator service ID
let account = dev; // String | The organization account name
let opts = {
  'xRequestId': test-id // String | Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
};
apiInstance.getServiceAuthenticatorStatus(authenticator, serviceId, account, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticator** | **String**| The type of authenticator | 
 **serviceId** | **String**| URL-Encoded authenticator service ID | 
 **account** | **String**| The organization account name | 
 **xRequestId** | **String**| Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one.  | [optional] 

### Return type

[**AuthenticatorStatus**](AuthenticatorStatus.md)

### Authorization

[conjurAuth](../README.md#conjurAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## whoAmI

> WhoAmI whoAmI(opts)

Provides information about the client making an API request.

WhoAmI provides information about the client making an API request. It can be used to help troubleshoot configuration by verifying authentication and the client IP address for audit and network access restrictions. For more information, see Host Attributes. 

### Example

```javascript
import Conjur from 'conjur';
let defaultClient = Conjur.ApiClient.instance;
// Configure API key authorization: conjurAuth
let conjurAuth = defaultClient.authentications['conjurAuth'];
conjurAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//conjurAuth.apiKeyPrefix = 'Token';

let apiInstance = new Conjur.StatusApi();
let opts = {
  'xRequestId': test-id // String | Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one. 
};
apiInstance.whoAmI(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRequestId** | **String**| Add an ID to the request being made so it can be tracked in Conjur. If not provided the server will automatically generate one.  | [optional] 

### Return type

[**WhoAmI**](WhoAmI.md)

### Authorization

[conjurAuth](../README.md#conjurAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

