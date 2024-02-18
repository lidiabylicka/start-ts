'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-10 items-center justify-center'>
      <div className='flex flex-col w-full text-sm align-center justify-center text-center lg:flex'>
        {' '}
        <h1 className='font-mono text-3xl font-bold'>
          Unlocking Nature&apos;s Potential: The Power of Adaptogenic Mushrooms
        </h1>
        <p className='text-xl mt-5'>
          Embark on a journey into the world of adaptogenic mushrooms with us!
          These incredible fungi are renowned for their ability to promote
          wellness and balance. Explore the science behind their benefits and
          uncover the secrets to a healthier, happier life. Ready to unlock
          nature&apos;s power? Dive into our collection of{' '}
          <Link
            href='/posts'
            className='underline hover:bg-purple-400 dark:hover:bg-purple-700'>
            Posts
          </Link>{' '}
          and unleash the potential of adaptogenic mushrooms today!
        </p>
      </div>
      <Image
        src={theme === 'light' ? '/mushrooms.jpg' : '/dark-mushroom.jpg'}
        alt='Mushrooms'
        width={400}
        height={500}
        // placeholder='blur'
        className='rounded-md justify-self-center justify-center w-auto h-auto'
      />
    </div>
  );
}
