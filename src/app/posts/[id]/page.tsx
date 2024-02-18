import NotFound from './not-found';

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
    <main className='px-5 pt-24 text-center'>
      <h1 className='font-mono text-2xl font-bold'>{post.title}</h1>
      {post.body}
    </main>
  );
}
