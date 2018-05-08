/**
 * @author Xianpeng
 * @link https://app.testquality.com/project/2689/testcase/59737
 */

module.exports = {

    before: function(client) {
        client.login();
    },

    '@tags': ['home'],
    'login home page and verify': function(client) {
        const navbar = client.page.navbar();
        navbar.verifyVesion(process.env.VERSION);
    },

    after: function(client) {
        client.end();
    }
};
