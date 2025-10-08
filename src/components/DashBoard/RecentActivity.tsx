"use client";
import React from 'react';
import { ActivityItem } from './ActivityItem';

export const RecentActivity: React.FC = () => {
  const activities = [
    { employer: "Tech Corp Ltd", action: "Submitted KYC documents", time: "2 min ago" },
    { employer: "Global Solutions Inc", action: "KYC approved", time: "15 min ago" },
    { employer: "Startup Innovations", action: "Updated company profile", time: "1 hour ago" },
    { employer: "Enterprise Group", action: "KYC rejected - documents incomplete", time: "2 hours ago" },
    { employer: "Digital Services Co", action: "Submitted KYC documents", time: "3 hours ago" }
  ];

  return (
    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-1">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};