/**
 * Project files and modules path compiler
 */

module.exports = {

    config : require('path').join(__dirname, 'config/config.js'),
    inputs : require('path').join(__dirname, 'config/inputs/test-inputs.js'),
    samplePayload : require('path').join(__dirname, 'config/inputs/test-payload.js'),
    testsDir : require('path').join(__dirname, '/test'),
    
    //helpers
    locators : require('path').join(__dirname, 'helpers/css-locators.js'),
    mail7: require('path').join(__dirname, 'helpers/mail7.js'),
    messages : require('path').join(__dirname, '/helpers/expected-messages'),
    uri : require('path').join(__dirname, '/helpers/uri.js')
};