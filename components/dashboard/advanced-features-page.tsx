import React from 'react';
import { AITaskSuggestions } from './ai-task-suggestions';
import { AutomatedReporting } from './automated-reporting';
import { ResourceAllocation } from './resource-allocation';
import { TimelineView } from './timeline-view';

export const AdvancedFeaturesPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Advanced Features</h2>
      <div className="space-y-4">
        <AITaskSuggestions />
        <AutomatedReporting />
        <ResourceAllocation />
        <TimelineView />
      </div>
    </div>
  );
};