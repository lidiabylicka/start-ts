'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Suspense } from 'react';
import { Card } from 'flowbite-react';

type Post = {
  id: string;
  title: string;
  body: string;
};

export default function AllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: Post[] }>(
          'http://localhost:3000/api/posts/'
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 items-center justify-center px-5 pt-5 text-center'>
      <Suspense fallback={<div>Loading Posts...</div>}>
        {posts?.map((post) => (
          <div key={post.id} className='min-h-min'>
            <Card
              className='hover:bg-footer-light h-postCard sm:max-h-min'
              imgSrc='/mushroom-card.jpg'>
              <h5 className='font-mono lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-4 dark:hover:text-purple-700 '>
                {post.title}
              </h5>
              <Link href={`/posts/${post.id}`}>
                <p className='underline  hover:text-purple-700'>Read more</p>{' '}
              </Link>
            </Card>
          </div>
        ))}
      </Suspense>
    </main>
  );
}
