/* eslint-disable global-require */

/**
 * Builds mongoose models via the injected mongoose instance
 * @param mongoose the mongoose instance used to open a connection to mongo
 * @return {Object} an object where keys are the schemas
 */
module.exports = function buildSchemas(mongoose) {
    return {
        Application: require('./models/application')(mongoose),
        ClickstreamConfig: require('./models/clickstreamConfig')(mongoose),
        Connection: require('./models/connection')(mongoose),
        ConnectionConfig: require('./models/connectionConfig')(mongoose),
        FTPConfig: require('./models/ftpConfig')(mongoose),
        Organization: require('./models/organization')(mongoose),
        Provider: require('./models/provider')(mongoose),
        User: require('./models/user')(mongoose),
        WebhookConfig: require('./models/webhookConfig')(mongoose),
        WorkflowConfig: require('./models/workflowConfig')(mongoose),
    };
};
