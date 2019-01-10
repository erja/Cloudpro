# ExpressJS introduction

Express is a routing and middleware web framework that has minimal functionality of its own: an Express application is essentially a series of middleware function calls.

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

Built-in middleware functions, see 
[middleware]
(https://github.com/senchalabs/connect?_ga=1.199135783.963842333.1485359831#middleware)

Third party middleware functions, see [third-party]
(http://expressjs.com/en/resources/middleware.html)

The middleware is a function with three arguments: request (or req),
response (res), and next. If you’re writing your own middleware, you can use arbitrary
names for arguments, but it’s better to stick to the common naming convention. Here’s an
example of how to define your own middleware:
```
var myMiddleware = function (req, res, next) {
// Do something with req and/or res
next();
};
```

### TODO 1 Test your understanding

1.  Get acquainted with the express application on week 6 the folder `02  Express Introduction/middleware demo`.

2. Start the application and use Postman to make the following queries :
```
- GET https://URL-to-your-application/
- GET https://URL-to-your-application/compression
- GET https://URL-to-your-application/shared
- DELETE https://URL-to-your-application/purchase-orders
```
3. Which middleware is used in the application and how it shows?

## Making your own REST API

Start thinking of making a REST API by yourself. You should use only ExpressJS in your application. You can start with the middleware example. Next week is explaining routing done with ExpressJS, but you can start to design your own API.

### TODO 2 Test your understanding

1. Take a look at [HeiaHeia's API] (https://hh-api-docs.herokuapp.com/index.html). It is definately too large for a little API exercise, but think what kind of resources you would have in a similar type of application.
2. List the HTTP methods you will have in your API. At least getting a list of items, filtering a list of items by some criteria, inserting an item, deleting an item.
3. Write the express app.js (you can fine-tune routing next week).
4. Test your API with Postman.
5. Write FrisbyJS test cases for your REST API.
