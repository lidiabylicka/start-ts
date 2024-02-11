'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';

import Links from './Links';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <div className='bg-header-black w-full h-header justify-between align-center items-center p-2 flex flex-row'>
      <h1 className='text-white'>NEXT + TS</h1>
      <Button
        color={resolvedTheme === 'dark' ? 'dark' : 'light'}
        pill
        onClick={toggleTheme}>
        Switch to {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
      </Button>
      <Links />
    </div>
  );
};
export default Header;
