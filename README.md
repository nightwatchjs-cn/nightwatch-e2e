# nightwatch-e2e
This repository is used to show you how to use Nightwatchjs in real projects through E2E testing on the official website http://nightwatchjs.org/

[中文](https://github.com/nightwatchjs-cn/nightwatch-e2e/blob/master/README.CN.md)

[![Build Status](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e.svg?branch=master)](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e)

Development
-----------

### Prerequisite

* Install Node.js > 8.0.0 [Download](https://nodejs.org/en/download/)
* Install JDK 8 [Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
```
$ git clone git@github.com:nightwatchjs-cn/nightwatch-e2e.git
$ cd nightwatch-e2e
$ npm install
$ node nightwatch.conf.js               // download webdriver and selenium
$ cp sample.env .env                    // copy sample environment and change the environment variables to run test
```

### Run the e2e test scrpits
```
$ npm test                              // Run whole test
$ npm test tests/TC/TC45/login.js       // Run certain test
$ npm test tests/TC/TC45                // Run a group of test
```
More run test information can reference nightwatchjs [Development Guide.](http://nightwatchjs.org/guide/#running-tests)
