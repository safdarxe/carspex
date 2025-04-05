import { Post } from '../../lib/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <a href={`/posts/${post.slug}`}>{post.title}</a>
    </div>
  );
}