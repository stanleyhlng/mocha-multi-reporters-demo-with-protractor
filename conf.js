exports.config = {
    framework: 'mocha',

    mochaOpts: {
        reporter: 'mocha-multi-reporters',
        reporterOptions: {
            reporterEnabled: 'mocha-junit-reporter, tap, xunit',
            mochaJunitReporterReporterOptions: {
                mochaFile: 'junit-custom.xml'
            },
            xunitReporterOptions: {
                output: 'xunit-custom.xml'
            }            
        },
        timeout: 30000
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        'test/simple.spec.js'
    ]
}