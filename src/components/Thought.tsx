import ptBR from 'date-fns/locale/pt-BR';
import { format, formatDistance } from 'date-fns';

interface ThoughtProps {
  thought: ThoughtData;
}

export const Thought = ({ thought }: ThoughtProps) => {
  const createdAt = new Date(thought.createdAt);

  const dates = {
    created: format(createdAt, 'd && MMMM && uuuu', { locale: ptBR }).replace(/&&/g, 'de'),
    distance: formatDistance(createdAt, new Date(), { locale: ptBR }),
  };

  return (
    <div className="flex flex-col p-6 rounded bg-gray-light">
      <span className="flex flex-col mb-4 sm:gap-2 sm:flex-row sm:items-end">
        <h2 className="font-semibold sm:text-xl text-aqua">{dates.created}</h2>
        <span className="mb-px text-sm text-white text-opacity-60">há {dates.distance}</span>
      </span>

      <p className="text-sm whitespace-pre-wrap">{thought.content}</p>

      {thought.note && (
        <p className="mt-2 py-1.5 px-2 border-l-4 border-aqua bg-gray-highlight rounded flex items-center">
          <span className="text-xs sm:text-sm">{thought.note}</span>
        </p>
      )}
    </div>
  );
};
