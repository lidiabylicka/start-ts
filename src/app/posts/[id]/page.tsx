import NotFound from './not-found';

import { Button } from 'flowbite-react';
import Link from 'next/link';

type PostPageProps = {
  params: {
    id: string;
  };
};

export default async function SinglePostPage({ params }: PostPageProps) {
  const response = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const data = await response.json();

  if (!data.post) {
    return NotFound();
  }

  const post = data.post[0];

  return (
    <main className='flex flex-col px-48 pt-24 text-center items-center'>
      <h1 className='font-mono text-2xl font-bold mb-5'>{post.title}</h1>
      <div className='m-10'>{post.body}</div>
      <Link href='/posts'>
        <Button className='mt-5' pill>
          Back to all posts
        </Button>
      </Link>
    </main>
  );
}
