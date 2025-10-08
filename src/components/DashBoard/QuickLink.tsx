"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface QuickLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  hoverColor: string;
}

export const QuickLink: React.FC<QuickLinkProps> = ({
  href,
  icon,
  title,
  description,
  bgColor,
  iconBgColor,
  hoverColor
}) => {
  return (
    <a
      href={href}
      className={`flex items-center justify-between p-4 ${bgColor} ${hoverColor} rounded-lg transition-colors group`}
    >
      <div className="flex items-center gap-3">
        <div className={`${iconBgColor} p-2 rounded-lg`}>
          {icon}
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
    </a>
  );
};