import { Server, Layout, Workflow, Rocket, Boxes, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Server,
    title: "Backend Engineering (Java)",
    description:
      "High‑performance APIs with Spring Boot, security, testing, and documentation."
  },
  {
    icon: Layout,
    title: "Frontend Development (Angular)",
    description:
      "Robust SPAs with reusable components, RxJS patterns, and accessibility."
  },
  {
    icon: Workflow,
    title: "CI/CD Automation",
    description:
      "Jenkins or GitHub Actions pipelines for build, test, quality gates, and deploy."
  },
  {
    icon: Boxes,
    title: "Cloud Architecture (AWS)",
    description:
      "Scalable infrastructure with ECS/EKS/Lambda, RDS/DynamoDB, and networking."
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Shift‑left security, IAM best practices, SAST/DAST, and secrets management."
  },
  {
    icon: Rocket,
    title: "DevEx & Performance",
    description:
      "Observability, cost optimization, and performance tuning end‑to‑end."
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-gray-900">Services</motion.h2>
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-2 text-gray-600">Everything you need to ship reliably at scale.</motion.p>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={card}
            whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(2, 6, 23, 0.08)" }}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition will-change-transform"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-600/10 p-2 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
