/* eslint-disable global-require */

/**
 * Builds mongoose models via the injected mongoose instance
 * @param mongoose the mongoose instance used to open a connection to mongo
 * @return {Object} an object where keys are the schemas
 */
module.exports = function buildSchemas(mongoose) {
    return {
        Application: require('./models/application')(mongoose),
        Connection: require('./models/connection')(mongoose),
        FTPConfig: require('./models/ftpConfig')(mongoose),
        Integration: require('./models/integration')(mongoose),
        IntegrationConfig: require('./models/integrationConfig')(mongoose),
        Organization: require('./models/organization')(mongoose),
        User: require('./models/user')(mongoose),
        Webhook: require('./models/webhook'),
        WebhookConfig: require('./models/webhookConfig')(mongoose),
        Workflow: require('./models/workflow')(mongoose),
    };
};
