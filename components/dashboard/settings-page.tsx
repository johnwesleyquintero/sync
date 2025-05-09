import React from 'react';
import { ThemeCustomizer } from './theme-customizer';
import { DashboardSettings } from './dashboard-settings';

export const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Settings</h2>
      <div className="space-y-4">
        <ThemeCustomizer />
        <DashboardSettings />
      </div>
    </div>
  );
};