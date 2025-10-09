"use client";

import React, { useState } from 'react';
import { Navbar } from '@/components/admin/Navbar';
import { Sidebar } from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar onMenuClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)} />
      
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />

      <main
        className={`pt-16 lg:ml-64`}
      >
        {children}
      </main>
    </div>
  );
}