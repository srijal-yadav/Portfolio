const groups = {
  "Languages & Frameworks": ["C#"],
  "Game Feature": ["Game Animation, Game Physics, AI Systems, NavMesh, Timelines UI/UX, Prefabs"],
  "Tools & Concepts": ["Visual Studio, Git, Unity(Engine), Blender (3D modeling), Canva (UI design assets)"]
};

export default function Skills() {
  return (
    <section id="skills" className="section bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[var(--primary)] text-center">Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(groups).map(([title, list]) => (
            <div key={title} className="card">
              <h3 className="font-semibold text-slate-800">{title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
