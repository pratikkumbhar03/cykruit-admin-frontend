"use client";
import React from 'react';
import { Users, Clock, CheckCircle, XCircle } from 'lucide-react';
import { DashboardCard } from '@/components/DashBoard/DashboardCard';

export const StatsGrid: React.FC = () => {
  const stats = [
    {
      title: "Total Employers",
      value: 1247,
      icon: <Users className="w-6 h-6" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      title: "Pending KYC",
      value: 34,
      icon: <Clock className="w-6 h-6" />,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      title: "Approved",
      value: 1189,
      icon: <CheckCircle className="w-6 h-6" />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      title: "Rejected",
      value: 24,
      icon: <XCircle className="w-6 h-6" />,
      bgColor: "bg-red-100",
      iconColor: "text-red-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <DashboardCard key={index} {...stat} />
      ))}
    </div>
  );
};