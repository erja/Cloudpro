# A small API


The `todo/` directory contains a simple API that demonstrates these key concepts. The first step is to run it and interact with it to understand these REST principles and how they are implemented.

To test your API you will need to connect using the Postman tool.

Before starting this worksheet you should update the node installation to the latest version. Instructions can be found in the previous worksheet (w3 Introduction to NodeJS).

1. use the **terminal** to navigate to the `todo` directory and install the module dependencies using `npm install`. This will install the [restify](http://restify.com/), [xmlbuilder](https://github.com/oozcitak/xmlbuilder-js) and [csprng](https://www.npmjs.com/package/csprng) modules. Take a few moments to read through their documentation.
2. start the API  by running the routes file `node index.js`.
4. locate and copy the public URL of your container. 
5. install and open the Google Chrome Postman plugin and paste in the url you just copied. Remove the trailing `/` and add the port number to the end. Click on the **Send** button.
6. now try the `http://<url>:8080/lists` URL. Why does it return the same result (study `index.js` carefully).
6. each request returns a [response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes) that indicates its success or failure. Look up the response code to find out more.
7. the response also includes a **body** which contains any data returned from the API. Notice that the data is returned in **JSON** format. The data returned is known as its **representation**.

# API Acceptance Testing

In addition to carrying out _unit tests_ you can run tests on the API _interface_. This allows you to write tests that define how your API should handle various calls and test it using both good and bad data. Typically you should write these tests when you define your API _interface_ and before you carry out any coding.

Acceptance testing will be carried out using the [frisby](https://www.npmjs.com/package/frisby) package which is built on the [jasmine-node](https://www.npmjs.com/package/jasmine-node) framework you have already used.

1. start by opening the `todo/` directory and installing the module dependencies. You will need to install **jasmine-node** globally if this has not already been done.
2. open the `test/todo-spec.js` script and read it, paying particular attention to the detailed comments.
3. start the API and check it is visible using Postman.
4. change the base urls to match your cloud9 API.
5. run the acceptance tests by entering `jasmine-node test/ --verbose`, this will output the test results to the terminal. Take a few moments to understand this output.
6. run the acceptance tests again. Why do they fail this time, use the error trace to find out what failed and why.

## TODO 1 Test Your Knowledge

1. create a new test `DELETE /lists` and add it at the start of the test. Eventually this should clear all the lists in the API and return success, lists deleted.
2. run your tests, they should fail (we have not written the new API feature!
3. add the  `--autotest --watch .` flags when you run the test script (see the previous worksheet), this will automatically run your acceptance tests every time you save a file.
3. implement `DELETE /lists`. The tests will pass to indicate success.


