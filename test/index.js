const assert = require('chai').assert;
const schemas = require('../lib');

describe('buildSchema', function () {
    it('exports all mongoose schemas', function () {
        const expectedSchemas = new Set([
            'ActivitySchema',
            'ApplicationSchema',
            'ClickstreamConfigSchema',
            'ConnectionSchema',
            'ConnectionConfigSchema',
            'FTPConfigSchema',
            'OrganizationSchema',
            'ProviderSchema',
            'UserSchema',
            'WebhookConfigSchema',
            'WorkflowConfigSchema',
            'PlanSchema',
        ]);
        Object.keys(schemas).forEach(schema => assert(expectedSchemas.has(schema)));
    });
});
