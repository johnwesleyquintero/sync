import React from 'react';
import { CommentThread } from './comment-thread';
import { FileVersioning } from './file-versioning';
import { TeamCollaboration } from './team-collaboration';

export const CollaborationPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Collaboration</h2>
      <div className="space-y-4">
        <CommentThread />
        <FileVersioning />
        <TeamCollaboration />
      </div>
    </div>
  );
};