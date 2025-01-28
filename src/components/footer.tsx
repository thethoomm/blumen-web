import { Link } from "react-router";

type Column = {
  title: string;
  children: {
    label: string;
    href: string;
  }[];
};

const contacts = ["compassinho@gmail.com", "+55 41 99999-9999"];

const columns: Column[] = [
  {
    title: "Links",
    children: [
      {
        label: "About us",
        href: "/about-us",
      },
      {
        label: "Products",
        href: "/products",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
    ],
  },
  {
    title: "Community",
    children: [
      {
        label: "About us",
        href: "/about-us",
      },
      {
        label: "Products",
        href: "/products",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full h-full py-5 bg-primary-lunar bg-[url(/assets/background-pattern.svg)] bg-contain bg-center">
      <div className="container-lg h-full flex flex-col justify-between gap-6">
        <main className="h-full flex flex-col sm:flex-row sm:items-center justify-between gap-6">

          <div className="flex flex-col justify-start gap-2">
            <h2 className="text-5xl font-bold text-white font-eb-garamond">Blumen</h2>
            {contacts.map((contact, index) => (
              <span key={index} className="text-white">{contact}</span>
            ))}
          </div>

          <div className="flex items-start justify-start md:justify-center gap-6">
            {columns.map((column, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {column.title}
                </h3>
                <ul>
                  {column.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link to={child.href} className="text-white hover:text-primary-accent ">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>

        <div className="flex items-center justify-between">
          <img src="/assets/logo.svg" alt="Blumen logo" draggable={false} />
          <span className="text-sm text-white">
            Compassinhos &copy;. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
