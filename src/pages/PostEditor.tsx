import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface PostEditorProps {
  onPublish: (content: string) => void;
}

export default function PostEditor({ onPublish }: PostEditorProps) {
  const { user } = useAuth();
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onPublish(content);
      setContent('');
    }
  };
  
  const handleInteraction = () => {
    if (!user) {
      alert("Please sign in to interact.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onFocus={handleInteraction}
        className="w-full p-2 border-none focus:ring-0 resize-none"
        rows={3}
        placeholder="How have you been?"
        disabled={!user}
      />
      <div className="flex justify-between items-center mt-2">
        <button
          type="submit"
          disabled={!content.trim() || !user}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          Publish
        </button>
      </div>
    </form>
  );
}