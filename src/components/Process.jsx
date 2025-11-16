import { GitBranch, PackageCheck, TerminalSquare, CloudCog } from "lucide-react";

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

export default function Process() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Delivery Approach</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
