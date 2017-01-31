/* eslint-disable global-require */

/**
 * Builds mongoose models via the injected mongoose instance
 * @param mongoose the mongoose instance used to open a connection to mongo
 * @return {Object} an object where keys are the schemas
 */
module.exports = function createModels(modelFn) {
    return {
        Application: require('./models/application')(modelFn),
        ClickstreamConfig: require('./models/clickstreamConfig')(modelFn),
        Connection: require('./models/connection')(modelFn),
        ConnectionConfig: require('./models/connectionConfig')(modelFn),
        FTPConfig: require('./models/ftpConfig')(modelFn),
        Organization: require('./models/organization')(modelFn),
        Provider: require('./models/provider')(modelFn),
        User: require('./models/user')(modelFn),
        WebhookConfig: require('./models/webhookConfig')(modelFn),
        WorkflowConfig: require('./models/workflowConfig')(modelFn),
    };
};
