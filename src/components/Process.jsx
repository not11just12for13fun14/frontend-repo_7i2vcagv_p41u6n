import { GitBranch, PackageCheck, TerminalSquare, CloudCog } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: GitBranch,
    title: "Plan & Design",
    text: "Collaborative scoping, architecture, and technical roadmap."
  },
  {
    icon: TerminalSquare,
    title: "Build",
    text: "Iterative development with clean code, tests, and documentation."
  },
  {
    icon: PackageCheck,
    title: "Automate",
    text: "CI/CD pipelines, quality gates, and release management."
  },
  {
    icon: CloudCog,
    title: "Scale",
    text: "AWS infrastructure, monitoring, and continuous improvement."
  }
];

const lineVariants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Process() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-gray-900">Delivery Approach</motion.h2>
        <div className="relative mt-8">
          {/* Animated connector line for large screens */}
          <motion.div
            className="absolute left-0 right-0 top-20 hidden h-0.5 origin-left bg-gradient-to-r from-blue-200 to-purple-200 lg:block"
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10 text-blue-700"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
