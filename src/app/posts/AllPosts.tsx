'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      {posts?.map((post) => (
        <div key={post.id} className='mb-5'>
          <div className='flex flex-col justify-between border hover:text-gray-300 dark:hover:text-purple-700 bg-footer-light dark:bg-black hover:bg-footer-black dark:hover:bg-footer-light dark:border-gray-500 rounded-md py-5 px-10 h-postCard items-center'>
            <h1 className='font-mono lg:text-lg line-clamp-4 font-bold'>
              {post.title}
            </h1>
            <Link href={`/posts/${post.id}`}>
              <p className='underline'>Read more</p>{' '}
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
