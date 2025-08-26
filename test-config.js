exports.config = {
    logLevel: 'info',
    framework: 'mocha',
    maxInstances: 1,
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 60000
    },
    sync: true
}