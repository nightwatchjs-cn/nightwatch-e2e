/**
 * @method login
 */
exports.command = function() {
    this.maximizeWindow();

    var home = this.page.home();
    home.navigate();
};
