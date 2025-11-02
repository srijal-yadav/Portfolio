const projects = [
  {
    title: "Squirrel Dodge ",
    tech: " C#,Visual Studio, Canva,Unity(Engine)",
    desc: ["a 2D offline casual game where a squirrel dodges falling blocks to score points","Implemented player controls, collision detection, score system, and difficulty scaling"]
  },
  {
    title: "Air Strike",
    tech: " C#,Visual Studio, Canva,Unity(Engine)",
    desc: ["Implemented player controls, collision detection, particle effects using Timeline, and game physics.", "A 3D action-based arcade game where the player controls a spaceship to destroy enemies"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[var(--primary)]">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center justify-items-center">
          {projects.map(p => (
            <article
              key={p.title}
              className="card hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{p.tech}</p>
              <p className="mt-3 text-slate-700 text-sm">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

