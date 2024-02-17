'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';

export default function ThemeChanger() {
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
    <Button
      color={resolvedTheme === 'dark' ? 'dark' : 'light'}
      pill
      onClick={toggleTheme}>
      Switch to {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
    </Button>
  );
}
