import { Server, Layout, Workflow, Rocket, Boxes, ShieldCheck } from "lucide-react";

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

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Services</h2>
      <p className="mt-2 text-gray-600">Everything you need to ship reliably at scale.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-600/10 p-2 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
