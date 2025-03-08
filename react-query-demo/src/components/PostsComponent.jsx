import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const PostsComponent = () => {
  const { data, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // 1 min before fetching again
    cacheTime: 300000, // 5 mins before garbage collection
    refetchOnWindowFocus: false, // Prevent auto refetch when switching tabs
    keepPreviousData: true, // Maintain previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}><strong>{post.title}</strong></li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
