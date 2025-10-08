"use client";
import React from 'react';
import { Activity } from 'lucide-react';

interface ActivityItemProps {
  employer: string;
  action: string;
  time: string;
}

 export const ActivityItem: React.FC<ActivityItemProps> = ({
  employer,
  action,
  time
}) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 p-2 rounded-full mt-1">
          <Activity className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{employer}</p>
          <p className="text-xs text-gray-500">{action}</p>
        </div>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
};