import { Spinner } from 'flowbite-react';

export default function Loading() {
  return (
    <div className='text-center'>
      <Spinner color='pink' aria-label='Pink spinner example' size='xl' />{' '}
      Loading...
    </div>
  );
}
