import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* light animated gradient wash */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-white"
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto max-w-6xl px-6 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-white shadow-lg"
        >
          <motion.h2 className="text-2xl sm:text-3xl font-bold" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Have a project in mind?
          </motion.h2>
          <motion.p className="mt-2 text-white/90" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            I can help you architect, build, and scale it—from idea to production.
          </motion.p>
          <motion.form
            className="mt-6 grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <input className="w-full rounded-md border-0 px-4 py-3 text-gray-900" placeholder="Your name" />
            <input className="w-full rounded-md border-0 px-4 py-3 text-gray-900" placeholder="Email" type="email" />
            <motion.button
              type="submit"
              whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(255,255,255,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="rounded-md bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              Get in touch
            </motion.button>
          </motion.form>
          <p className="mt-3 text-sm text-white/80">Or email: you@yourdomain.com</p>
        </motion.div>
      </div>
    </section>
  );
}
