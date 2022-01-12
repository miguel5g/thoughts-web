import ptBR from 'date-fns/locale/pt-BR';
import { format, formatDistance } from 'date-fns';

interface PostProps {
  post: PostData;
}

export const Post = ({ post }: PostProps) => {
  const createdAt = new Date(post.createdAt);

  const dates = {
    created: format(createdAt, 'd && MMMM && uuuu', { locale: ptBR }).replace(/&&/g, 'de'),
    distance: formatDistance(createdAt, new Date(), { locale: ptBR }),
  };

  return (
    <div className="flex flex-col p-6 bg-gray-light rounded">
      <h2 className="mb-3 text-xl font-semibold text-aqua">
        {dates.created}{' '}
        <span className="text-sm text-white-light text-opacity-60">há {dates.distance}</span>
      </h2>

      <p className="text-sm whitespace-pre-wrap">{post.content}</p>

      {post.note && (
        <p className="text-sm whitespace-pre-wrap mt-2 py-1.5 px-2 border-l-4 border-aqua bg-white-light bg-opacity-10 rounded">
          {post.note}
        </p>
      )}
    </div>
  );
};
