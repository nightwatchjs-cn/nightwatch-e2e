require('env2')('.env');
const BINPATH = './bin/';

const config = {
  "globals_path": "./config/globals.js",
  "src_folders": ["./tests/TC"],
  "page_objects_path": "./tests/pages",
  "custom_commands_path": "./tests/commands",
  "output_folder": "./reports",
  "disable_colors": false,

  "selenium": {
    "start_process": true,
    "server_path": "./bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "./bin/chromedriver"
    }
  },

  "test_settings": {
    "default": {
      "filter": "**/*.js",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "on_failure": true,
        "path": "./screenshots"
      },

      "desiredCapabilities": {
        "browserName": "chrome",
        "acceptSslCerts": true,
        "chromeOptions" : {
          "args" : ["chrome"]
        }
      },

      "chrome": {
        "desiredCapabilities": {
          "browserName": "chrome",
          "javascriptEnabled": true,
          "acceptSslCerts": true
        }
      }
    }
  }
};

module.exports = config;

/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
*/
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) {
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
