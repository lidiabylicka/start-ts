import Container from './Container';

export async function generateStaticParams() {
  const posts = await fetch('https://localhost:3000/api/posts').then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = () => {
  return (
    <Container>
      <h1>Post Page </h1>
    </Container>
  );
};

export default PostPage;
