![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 16: Basic Auth
===
<img src="https://travis-ci.com/mrebb/16-basic-authentication.svg?branch=madhu">

## TRAVIS: https://travis-ci.com/mrebb/16-basic-authentication

## HEROKU: https://mongodb-lab16.herokuapp.com

## Server Endpoints
### `/api/signup`
* `POST` request
* the client should pass the username and password in the body of the request
* the server should respond with a token (generated using `jwt`)
* the server should respond with **400 Bad Request** to a failed request

### `/api/signin`
* `GET` request
* the client should pass the username and password to the server using a `Basic:` authorization header
* use middleware to parse the auth header for username/password
* perform some basic validation
* the server should respond with a token for authenticated users
* the server should respond with **401 Unauthorized** for non-authenticated users


## Tests

* `/api/signin`
  * `GET`: test for 401: Respond with 'bad request' if request body was invalid or invalid user tries to login
  * `GET`: test for 200: Responds with response body for a request made with a valid user credentials
* `/api/signup`
  * `POST`: test for 400: Responds with 'bad request' if no request body was provided or the body was invalid
  * `POST`: test for 200: Responds with the body content for a post request with a valid body
* `404`: page not found for all other routes that are not handled by API.