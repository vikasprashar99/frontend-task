import type { User, Post } from "../types";

export const USERS: { user: User; pass: string }[] = [
  { user: { id: 'u1', name: 'Theresa Webb', email: 'demo@example.com', avatar: 'https://i.pravatar.cc/48?u=1' }, pass: 'password123' },
  { user: { id: 'u2', name: 'John Doe', email: 'test@user.com', avatar: 'https://i.pravatar.cc/48?u=2' }, pass: 'testpass' },
];

export const findUserByCredentials = (email: string, pass: string) => {
  return USERS.find(u => u.user.email === email && u.pass === pass) || null;
};

export const INITIAL_POSTS: Post[] = [
  {
    id: 'p1',
    author: USERS[0].user,
    content: 'Hey How are you doing?',
    timestamp: '5 mins ago',
  },
];