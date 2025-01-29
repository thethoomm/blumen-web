import { Github } from "lucide-react";

export type Author = {
  name: string;
  avatar: string;
  role: string;
  personalDescription: string;
  github: string;
};

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="max-w-sm w-full h-full rounded-sm shadow-lg bg-athena-gray p-5 flex flex-col gap-4 items-center text-center hover:shadow-2xl transition-shadow duration-300">
      <img
        src={author.avatar}
        alt={`${author.name} avatar`}
        draggable={false}
        className="w-32 h-32 rounded-full border-4 border-primary-lunar hover:scale-105 transition-transform duration-300"
      />

      <a href={author.github} target="_blank">
        <Github />
      </a>
      <div>
        <h2 className="text-xl font-semibold text-primary-lunar">
          {author.name}
        </h2>
        <p className="text-sm text-secondary">{author.role}</p>
      </div>
      <p className="mt-2 text-secondary text-sm">{author.personalDescription}</p>
    </div>
  );
}
