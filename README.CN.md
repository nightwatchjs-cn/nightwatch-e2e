# `nightwatch-e2e example`

这个 Repository 是通过对 http://nightwatchjs.org/ 官方网站进行简单的 E2E 测试，以展示在实际项目中使用 Nightwatchjs 自动化测试框架和项目的目录结构。

[![Build Status](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e.svg?branch=master)](https://travis-ci.org/nightwatchjs-cn/nightwatch-e2e)

## 如何使用

### 先决条件

* 安装 Node.js > 8.0.0 [下载地址](https://nodejs.org/en/download/)
* 安装 JDK 8 并且配好环境变量 [下载地址](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

```bash
$ git clone git@github.com:nightwatchjs-cn/nightwatch-e2e.git
$ cd nightwatch-e2e
$ npm install
$ node nightwatch.conf.js             // 下载 webdriver and selenium，国内用户会很慢
$ cp sample.env .env                  // 复制样例环境文件来准备本地环境变量
```

### 运行 E2E 测试

```bash
$ npm test                            // Run whole test
$ npm test tests/TC/TC45/login.js     // Run certain test
$ npm test tests/TC/TC45              // Run a group of test
```

更多有关运行 E2E 请参见官方 [开发向导](http://nightwatchjs.org/guide/#running-tests)。
