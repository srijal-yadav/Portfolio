export default function Contact() {
  return (
    <section id="contact" className="section bg-blue-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[var(--primary)]">Contact</h2>
        <p className="mt-3 text-slate-600">Have a project or opportunity? Send a message — I'll get back to you.</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Form is static — configure EmailJS to enable sending.'); }}>
          <input name="name" placeholder="Your name" required className="w-full rounded-lg p-3 border border-slate-200" />
          <input name="email" type="email" placeholder="Your email" required className="w-full rounded-lg p-3 border border-slate-200" />
          <textarea name="message" rows="5" placeholder="Your message" required className="w-full rounded-lg p-3 border border-slate-200"></textarea>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>

        <div className="mt-6 text-sm text-slate-500">
          Or email me directly: <a href="mailto:srijaly18@gmail.com" className="text-[var(--primary)]">srijaly18@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
