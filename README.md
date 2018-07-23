![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 16: Basic Auth
===
<img src="https://travis-ci.com/mrebb/16-basic-authentication.svg?branch=madhu">

## TRAVIS: https://travis-ci.com/mrebb/16-basic-authentication

## HEROKU: https://mongoldb-lab16.herokuapp.com

## mLab: mongodb://testUser:test@123@ds239557.mlab.com:39557/heroku_lmhxqkb3 

## Sample env: 
PORT=3000
MONGODB_URI=mongodb://username:password@ds239557.mlab.com:39557/heroku_lmhxqkb3

## Server Endpoints

### `/api/signup`

* `POST` request
* the client should pass the username and password in the body of the request
* the server should respond with a token (generated using `jwt`)
* the server should respond with **400 Bad Request** to a failed request

    ## Sample REQUEST & RESPONSE using POSTMAN
    ```POST: https://mongoldb-lab16.herokuapp.com/api/signup```

      ```sample request body : {"username":"madhu", "password":"foo", "email":"foo@bar.com"}```

      ``` Response: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNTVlMzA0ZDAzN2NhMDAxNDdkMmYwNSIsImlhdCI6MTUzMjM1NTMzMn0.y_0CzWrETYsvh064s7MU5cEDERw1rTdq7V```

      ```mlab database user table after signup look like this  { "_id": { "$oid": "5b55e304d037ca00147d2f05"},"username":"madhu","password":"$2b$10$yKYEDb3bMh..uQ3IN6NXWuU4O421uHJSX8UQrCKIGlTZ38uVk3h6","email": "foo@bar.com","__v": 0}         ```

### `/api/signin`

* `GET` request

* the client should pass the username and password to the server using a `Basic ` authorization header
* use middleware to parse the auth header for username/password
* perform some basic validation
* the server should respond with a token for authenticated users
* the server should respond with **401 Unauthorized** for non-authenticated users

    ## Sample REQUEST & RESPONSE using POSTMAN
     ```1) GET: https://mongoldb-lab16.herokuapp.com/api/signin```

      ```use Basic Auth : username:'madhu', password: 'foo'. OR you can also test using authorization header using Authorization: Basic bWFkaHU6Zm9v```
      
      ``` Response:                                                 Welcome     ```

      ```2) GET: https://mongoldb-lab16.herokuapp.com/api/signin```

      ```use No auth under authorization tab```
      
      ``` Response:                                            Body: {"error": "Invalid User ID/Password"}               Status: 401 Unauthorized                   ```

## Tests

* `/api/signin`
  * `GET`: test for 401: Respond with 'bad request' if request body was invalid or invalid user tries to login
  * `GET`: test for 200: Responds with response body for a request made with a valid user credentials
* `/api/signup`
  * `POST`: test for 400: Responds with 'bad request' if no request body was provided or the body was invalid
  * `POST`: test for 200: Responds with the body content for a post request with a valid body
* `404`: page not found for all other routes that are not handled by API.