import NotFound from './not-found';

type PostPageProps = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: PostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await response.json();

  if (!data.title) {
    return NotFound();
  }
  return (
    <main className='px-5 pt-24 text-center'>
      <h1 className='font-mono text-2xl font-bold'>{data.title}</h1>
      {data.body}
    </main>
  );
}
