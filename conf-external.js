exports.config = {
    framework: 'mocha',

    mochaOpts: {
        reporter: 'mocha-multi-reporters',
        reporterOptions: {
            configFile: 'config.json'
        },
        timeout: 30000
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        'test/simple.spec.js'
    ]
}