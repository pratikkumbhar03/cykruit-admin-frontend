"use client";

import React from 'react';
import { Breadcrumb } from '@/components/DashBoard/Breadcrumb';
import { StatsGrid } from '@/components/DashBoard/StatsGrid';
import { RecentActivity } from '@/components/DashBoard/RecentActivity';
import { QuickLinksPanel } from '@/components/DashBoard/QuickLinksPanel';


const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb />
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        <StatsGrid />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentActivity />
          <QuickLinksPanel />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;