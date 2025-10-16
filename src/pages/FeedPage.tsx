import { useState } from 'react';
import { INITIAL_POSTS } from '../lib/mock-data';
import { useAuth } from '../hooks/useAuth';
import PostEditor from './PostEditor';
import type { Post as PostType } from '../types';
import Post from '../components/Post';


export default function FeedPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<PostType[]>(INITIAL_POSTS);

  const handlePublish = (content: string) => {
    if (!user) {
      alert('Please sign in to post.');
      return;
    }

    const newPost: PostType = {
      id: `p${posts.length + 1}`,
      author: user,
      content,
      timestamp: 'Just now',
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-2xl mx-auto py-8 px-4">
        <PostEditor onPublish={handlePublish} />
        <div className="mt-6 space-y-4">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}