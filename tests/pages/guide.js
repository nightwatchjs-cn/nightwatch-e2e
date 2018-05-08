/**
 * This is Nightwatch Developer Guide page http://nightwatchjs.org/guide
 */
const homeCommands = {

};

module.exports = {
    commands: [homeCommands],
    url: function() {
        return `${process.env.BASE_URL}/guide`;
    },
    sections: {
        home: {
            selector: '#index-container',
            elements: {
                jumbotron: '> .jumbotron',
                download: '> .download',
                mainFeatures: '> div:nth-child(4)',
                example: '> .example',
                twitter: '> .twitter'
            },
            sections: {
                jumbotron: {
                    selector: '> .jumbotron',
                    elements: {
                        img: 'img',
                        paragraph: 'p',
                        snippet: 'div.col-lg-5.col-md-5'
                    }
                },
                download: {
                    selector: '> .download',
                    elements: {
                        Download: '.download a',
                        ViewOnGithub: '.btn-github'
                    }
                },
                mainFeatures: {
                    selector: '> div:nth-child(4)',
                    elements: {
                        socialCarbonad: '.social.carbonad',
                        title: 'h2',
                        leftFeatures: '> div:nth-child(4) > div:nth-child(1) > ul',
                        icons: 'div:nth-child(4) > div:nth-child(2)',
                        rightFeatures: 'div:nth-child(4) > div:nth-child(3)',
                        tweetBtn: '.social li:nth-child(1) iframe',
                        starBtn: '.social li:nth-child(2) iframe'
                    }
                },
                example: {
                    selector: '> .example',
                    elements: {
                        sampleTest: '.sample-test',
                        sampleOutput: '.sampleoutput',
                        nightCloud: '.nightcloud-container'
                    }
                },
                twitter: {
                    selector: '> .twitter',
                    elements: {
                        title: 'h2',
                        paragraph: 'p:nth-child(2) a',
                        follow: 'p:nth-child(3) a'
                    }
                }
            }
        }
    }
};
