import { Author, AuthorCard } from "@/components/author-card";

const authors: Author[] = [
  {
    name: "Adriann Postigo Paranhos",
    avatar: "https://github.com/adriannparanhos.png",
    role: "Fullstack Developer",
    personalDescription: "Gosto de codar",
    github: "https://github.com/adriannparanhos",
  },
  {
    name: "Gelasio Ebel Junior",
    avatar: "https://github.com/gelasioebel.png",
    role: "Backend Developer",
    personalDescription: "Forging my career path in technology",
    github: "https://github.com/gelasioebel",
  },
  {
    name: "Rodrigo Soares Prazeres",
    avatar: "https://github.com/RodrigoPrazeres.png",
    role: "Frontend Developer",
    personalDescription: "Formando em Gestão de TI",
    github: "https://github.com/RodrigoPrazeres",
  },
  {
    name: "Thomas Henrique de Souza Santos",
    avatar: "https://github.com/thethoomm.png",
    role: "Fullstack Developer",
    personalDescription:
      "Node.js ecosystem (Next.js, Nest.js, Vue.js) and Golang.",
    github: "https://github.com/thethoomm",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray min-h-screen h-full py-12">
      <main className="container-lg flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </div>
      </main>
    </div>
  );
}
