# nightwatch-e2e
这个repository是通过对http://nightwatchjs.org/官方网站的E2E测试，来展示如何在实际项目中使用Nightwatchjs


[![Build Status](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e.svg?branch=master)](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e)

Development
-----------

### 先决条件

* 安装 Node.js > 8.0.0 [下载地址](https://nodejs.org/en/download/)
* 安装 JDK 8 并且配好环境变量 [下载地址](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
```
$ git clone git@github.com:nightwatchjs-cn/nightwatch-e2e.git
$ cd nightwatch-e2e
$ npm install
$ node nightwatch.conf.js               // 下载 webdriver and selenium
$ cp sample.env .env                    // 复制样例环境文件来准备本地环境变量
```

### 运行E2E测试
```
$ npm test                              // Run whole test
$ npm test tests/TC/TC45/login.js       // Run certain test
$ npm test tests/TC/TC45                // Run a group of test
```
更多有关运行E2E请参见官方 [开发向导](http://nightwatchjs.org/guide/#running-tests)