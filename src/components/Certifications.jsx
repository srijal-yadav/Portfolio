const certs = [
  { title: "CCNAv7: Switching, Routing, Wireless Essentials", issuer: "Cisco Networking Academy", date: "Dec 2024" },
  { title: "Google Cyber Security Certificate", issuer: "Google"},
  { title: "CCNAv7: Enterprise Networking, Security, and Automation ", issuer: "Cisco"}
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[var(--primary)]">Certifications</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {certs.map(c => (
            <div key={c.title} className="card text-left">
              <div className="font-semibold text-slate-800">{c.title}</div>
              <div className="text-sm text-slate-500 mt-1">{c.issuer} · {c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
