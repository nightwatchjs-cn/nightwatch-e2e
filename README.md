# nightwatch-e2e
Nightwatch E2E Test is create for Nightwatch website automated testing.

Development
-----------

### Prerequisite

* Install Node.js > 8.0.0 [Download](https://nodejs.org/en/download/)
```
$ git clone git@github.com:nightwatchjs-cn/nightwatch-e2e.git
$ cd nightwatch-e2e
$ npm install
$ node nightwatch.conf.js               // install webdriver and selenium
$ cp sample.env .env                    // copy a sample environment and change the environment variables to connect to Nightwatch
```

### Run the e2e test scrpits
```
$ npm test                              // Run whole test
$ npm test tests/TC/TC45/login.js    // Run certain test
$ npm test tests/TC/TC45             // Run a group of test

Offial command usage bellow

$ node nightwatch.js                    // Run whole test
$ node nightwatch.js tests/TC/TC45      // Run certain test
$ node nightwatch.js --tag login        // Run tests based on tags
```
More run test information can reference nightwatchjs [Development Guide.](http://nightwatchjs.org/guide/#running-tests)
