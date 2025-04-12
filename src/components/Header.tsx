'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white p-5 rounded-lg shadow-md mb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-[#2c3e50]">
          Welcome to Strata Management Portal {time && `- ${time}`}
        </h1>
        <div className="flex flex-col items-end">
          <span className="font-medium">John Doe</span>
          <span className="text-sm text-[#3498db]">Treasurer</span>
        </div>
      </div>
    </header>
  );
} 