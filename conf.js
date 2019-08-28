exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--no-sandbox" ]
        }
    },

    specs: ['./Specs/YandexTests.js'],

    framework: 'jasmine2',

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    },

    onPrepare: function () {

        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize(); //opening the browser to full screen
        browser.manage().timeouts().implicitlyWait(5000); //set maximum time that we are going to wait for the element to be available in the Website
        browser.get('https://passport.yandex.by'); //set starting page for our tests

        },
    };