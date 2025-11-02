import React from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-white/60 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-lg font-semibold text-[var(--primary)]">Srijal Yadav</div>
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="hover:text-[var(--primary)] transition">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/Resumec.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                View Resume
              </a>
            </li>
          </ul>

          {/* mobile menu */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="p-2 rounded-lg cursor-pointer bg-white border shadow-sm">Menu</summary>
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg p-3">
                <ul className="flex flex-col gap-2 text-sm">
                  {links.map((l) => (
                    <li key={l.id}>
                      <a href={`#${l.id}`} className="block py-1 hover:text-[var(--primary)]">
                        {l.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="/Resumec.pdf" target="_blank" rel="noreferrer" className="block mt-2 btn btn-primary text-center">
                      View Resume
                    </a>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
  );
}
