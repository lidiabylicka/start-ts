'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const siteRoutes = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/contact', label: 'Contact' },
];

export default function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='flex flex-row gap-5'>
        {siteRoutes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={`text-zinc-400 transition ${
                pathname === route.href ? 'underline' : ''
              }`}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
