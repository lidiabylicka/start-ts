import { Suspense } from 'react';

import Container from './Container';
import AllPosts from './AllPosts';

export default async function AllPostsPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return (
    <Container>
      <h1 className='font-mono text-2xl font-bold'>All Posts</h1>
      <Suspense fallback={<div>Loading Posts...</div>}>
        <AllPosts posts={posts} />
      </Suspense>
    </Container>
  );
}
