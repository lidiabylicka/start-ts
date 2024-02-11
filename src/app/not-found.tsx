import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='global flex flex-col justify-center align-middle items-center m-10'>
      <h2 className='text-red-300'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}
