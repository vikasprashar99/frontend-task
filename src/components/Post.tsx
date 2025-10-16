
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const handleInteraction = () => alert('Function not implemented');

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center mb-3">
        <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700">{post.content}</p>
      <div className="flex items-center space-x-4 mt-4 text-gray-500">
        <button onClick={handleInteraction} className="hover:text-gray-800">Like</button>
        <button onClick={handleInteraction} className="hover:text-gray-800">Comment</button>
        <button onClick={handleInteraction} className="hover:text-gray-800">Share</button>
      </div>
    </div>
  );
}