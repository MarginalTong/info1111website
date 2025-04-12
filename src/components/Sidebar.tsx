'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'dashboard', icon: 'home', label: 'Dashboard', path: '/' },
  { id: 'finance', icon: 'dollar-sign', label: 'Finance', path: '/finance' },
  { id: 'maintenance', icon: 'tools', label: 'Maintenance', path: '/maintenance' },
  { id: 'committee', icon: 'users', label: 'Committee', path: '/committee' },
  { id: 'meetings', icon: 'calendar-alt', label: 'Meetings', path: '/meetings' },
  { id: 'documents', icon: 'file-alt', label: 'Documents', path: '/documents' },
  { id: 'communication', icon: 'comments', label: 'Communication', path: '/communication' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-[250px] bg-[#2c3e50] text-white p-5 fixed h-screen">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center">Strata Portal</h2>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={pathname === item.path ? 'bg-[#3498db] rounded-lg' : ''}
          >
            <Link
              href={item.path}
              className="flex items-center px-4 py-3 rounded-lg hover:bg-[#3498db] transition-colors"
            >
              <i className={`fas fa-${item.icon} w-5 mr-3`}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 