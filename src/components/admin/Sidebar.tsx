// Sidebar Component
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SidebarItem } from "@/components/admin/SidebarItem";
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  FileText,
  FolderTree,
  X,
  AlertCircle,
  CheckCircle,
  XCircle,
  Flag,
  Star,
  Archive,
  Map,
  Award,
  Wrench
} from "lucide-react";

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
  children?: NavItem[];
}


export const Sidebar: React.FC<{
  isMobileOpen: boolean;
  onClose: () => void;
}> = ({ isMobileOpen, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Users",
    "Employers",
    "KYC",
  ]);

  // keep activePath in sync with current pathname (ignores query)
  const [activePath, setActivePath] = useState<string>(pathname ?? "/admin/kyc-management");
  useEffect(() => {
    if (pathname) setActivePath(pathname);
  }, [pathname]);

  const getBase = (p?: string) => (p ? p.split("?")[0] : "");

  const navigationItems: NavItem[] = [
    {
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/admin/dashboard'
    },
    {
      label: 'Users',
      icon: <Users className="w-5 h-5" />,
      path: '/admin/users',
      children: [
        { label: 'All Users', icon: null, path: '/admin/users' },
        { label: 'Job Seekers', icon: null, path: '/admin/users/seekers' },
        { label: 'Employers', icon: null, path: '/admin/users/employers' }
      ]
    },
    {
      label: 'Employers',
      icon: <Building2 className="w-5 h-5" />,
      path: '/admin/employers',
      children: [
        { label: 'All Employers', icon: null, path: '/admin/employers' },
        { label: 'Flagged', icon: <Flag className="w-4 h-4" />, path: '/admin/employers/flagged' }
      ]
    },
    {
      label: 'KYC',
      icon: <FileText className="w-5 h-5" />,
      path: '/admin/kyc-management',
      children: [
        { label: 'All Submissions', icon: null, path: '/admin/kyc-management' },
        { label: 'Pending', icon: <AlertCircle className="w-4 h-4" />, path: '/admin/kyc-management?status=pending'},
        { label: 'Approved', icon: <CheckCircle className="w-4 h-4" />, path: '/admin/kyc-management?status=approved' },
        { label: 'Rejected', icon: <XCircle className="w-4 h-4" />, path: '/admin/kyc-management?status=rejected' }
      ]
    },
    {
      label: 'Jobs',
      icon: <Briefcase className="w-5 h-5" />,
      path: '/admin/jobs',
      children: [
        { label: 'All Jobs', icon: null, path: '/admin/jobs' },
        { label: 'Pending Approval', icon: <AlertCircle className="w-4 h-4" />, path: '/admin/jobs/pending'},
        { label: 'Active', icon: <CheckCircle className="w-4 h-4" />, path: '/admin/jobs/active' },
        { label: 'Draft', icon: null, path: '/admin/jobs/draft' },
        { label: 'Expired', icon: null, path: '/admin/jobs/expired' },
        { label: 'Archived', icon: <Archive className="w-4 h-4" />, path: '/admin/jobs/archived' },
        { label: 'Featured', icon: <Star className="w-4 h-4" />, path: '/admin/jobs/featured' }
      ]
    },
    {
      label: 'Content',
      icon: <FolderTree className="w-5 h-5" />,
      path: '/admin/content',
      children: [
        { label: 'Skills Library', icon: <Wrench className="w-4 h-4" />, path: '/admin/content/skills' },
        { label: 'Certifications', icon: <Award className="w-4 h-4" />, path: '/admin/content/certifications' },
        { label: 'Categories', icon: null, path: '/admin/content/categories' },
        { label: 'Roles', icon: null, path: '/admin/content/roles' },
        { label: 'Locations', icon: <Map className="w-4 h-4" />, path: '/admin/content/locations' }
      ]
    }
  ];

  const handleToggle = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const handleNavigate = (path: string) => {
    onClose();
    router.push(path);
    setActivePath(getBase(path));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - Always visible on desktop, toggleable on mobile */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 w-64 z-50 transition-transform duration-300 lg:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Cykruit Admin</h1>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="space-y-1">
            {navigationItems.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                isActive={activePath === item.path}
                isExpanded={expandedItems.includes(item.label)}
                onToggle={() => handleToggle(item.label)}
                onNavigate={handleNavigate}
                currentPath={activePath}
              />
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};