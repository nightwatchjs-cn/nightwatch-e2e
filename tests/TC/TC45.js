/**
 * @author Xianpeng Shen
 * @link https://app.testquality.com/project/2689/testcase/59737
 */

module.exports = {

    before: function(client) {
        client.login();
    },

    '@tags': ['home'],
    'login home page and verify': function(client) {
        var navbar = client.page.navbar();
        navbar.verifyVesion(process.env.VERSION);

        var homePage = client.page.home();
        homePage.expect.section('@home').to.be.visible;

        // var homeSetion = homePage.section.home;
        // homeSetion.expect.element('@jumbotron').to.be.visible;
        // homeSetion.expect.element('@download').to.be.visible;
        // homeSetion.expect.element('@mainFeatures').to.be.visible;
        // homeSetion.expect.element('@example').to.be.visible;
        // homeSetion.expect.element('@twitter').to.be.visible;
    },

    after: function(client) {
        client.end();
    }
};
