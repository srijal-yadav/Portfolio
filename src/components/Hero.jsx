import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-[72vh] flex items-center">
      <div className="section text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-[var(--primary)] leading-tight"
        >
          Srijal Yadav
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-4 text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
          Game Developer | Marketing & Sales
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/Resumec.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            View Resume
          </a>
          <a href="#projects" className="btn border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition">
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
}
