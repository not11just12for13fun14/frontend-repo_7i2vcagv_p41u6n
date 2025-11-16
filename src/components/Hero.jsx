import { ArrowRight, Cloud, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white" />

      {/* Animated soft blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-24 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              <Cloud className="h-4 w-4" /> Cloud-ready Full‑Stack Delivery
            </motion.div>
            <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Freelance Full‑Stack Developer
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 text-lg leading-7 text-gray-600">
              I build scalable backends in <span className="font-semibold text-gray-800">Java</span> and
              fast, accessible frontends with <span className="font-semibold text-gray-800">Angular</span>.
              Automated deployments via <span className="font-semibold text-gray-800">Jenkins</span> or
              <span className="font-semibold text-gray-800"> GitHub Actions</span> on <span className="font-semibold text-gray-800">AWS</span>.
            </motion.p>
            <motion.div variants={stagger} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(37, 99, 235, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white shadow transition"
              >
                Let’s work together <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 hover:bg-gray-50 transition"
              >
                <Code2 className="h-4 w-4" /> View services
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-blue-200/40 to-purple-200/40 blur-2xl" />
            <motion.div
              className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-backdrop backdrop-blur"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm text-gray-500">Backend</p>
                  <p className="mt-1 font-semibold text-gray-900">Java • Spring</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-purple-50 p-4">
                  <p className="text-sm text-gray-500">Frontend</p>
                  <p className="mt-1 font-semibold text-gray-900">Angular</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-emerald-50 p-4">
                  <p className="text-sm text-gray-500">Cloud</p>
                  <p className="mt-1 font-semibold text-gray-900">AWS</p>
                </motion.div>
              </div>
              <motion.div className="mt-4 rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                CI/CD pipelines, IaC, observability and production ops baked in from day one.
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
