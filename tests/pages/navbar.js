/**
 * This page is the top bar on the website.
 */

var navbarCommands = {
    verifyVesion: function(version) {
        const navbarSection = this.section.navbar;
        navbarSection.expect.element('@smallLogo').text.to.equal(version).before(5000);
        return this;
    }
};

module.exports = {
    commands: [navbarCommands],
    sections: {
        navbar: {
            selector: 'body .navbar',
            elements: {
                smallLogo: '.logo-small',
                img: 'img',
                Home: '.navbar-right li:nth-child(1)',
                GettingStarted: '.navbar-right li:nth-child(2)',
                DeveloperGuide: '.navbar-right li:nth-child(3)',
                APIReference: '.navbar-right li:nth-child(4)',
                Blog: '.navbar-right li:nth-child(5)',
                NightCloud: '.navbar-right li:nth-child(6)',
                Contant: '.navbar-right li:nth-child(7)'
            }
        }
    }
};
