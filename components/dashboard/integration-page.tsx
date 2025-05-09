import React from 'react';
import { WebhookSettings } from './webhook-settings';
import { ApiDocumentation } from './api-documentation';
import { ExternalIntegrations } from './external-integrations';

export const IntegrationPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Integrations</h2>
      <div className="space-y-4">
        <WebhookSettings />
        <ApiDocumentation />
        <ExternalIntegrations />
      </div>
    </div>
  );
};