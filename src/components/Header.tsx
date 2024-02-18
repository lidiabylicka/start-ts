import Link from 'next/link';

import Links from './Links';
import ThemeChanger from './ThemeChanger';

const Header = () => {
  return (
    <div className='bg-header-light w-full h-header justify-between align-center items-center p-5 flex flex-row dark:bg-header-black'>
      <h1 className='font-mono font-bold dark:text-white'>
        <Link href='/'>NEXT + TS</Link>
      </h1>
      <ThemeChanger />
      <Links />
    </div>
  );
};
export default Header;
