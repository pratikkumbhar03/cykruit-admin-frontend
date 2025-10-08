"use client";
import React from 'react';
import { CheckCircle, Users } from 'lucide-react';
import { QuickLink } from './QuickLink';
export const QuickLinksPanel: React.FC = () => {
  const links = [
    {
      href: "/kyc-management",
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "KYC Management",
      description: "Review pending applications",
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-100"
    },
    {
      href: "/employer-list",
      icon: <Users className="w-5 h-5 text-white" />,
      title: "All Employers",
      description: "View complete list",
      bgColor: "bg-gray-50",
      iconBgColor: "bg-gray-600",
      hoverColor: "hover:bg-gray-100"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
      <div className="space-y-3">
        {links.map((link, index) => (
          <QuickLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};