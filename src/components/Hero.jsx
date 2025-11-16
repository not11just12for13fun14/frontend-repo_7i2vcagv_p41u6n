import { ArrowRight, Cloud, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-white" />
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              <Cloud className="h-4 w-4" /> Cloud-ready Full‑Stack Delivery
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Freelance Full‑Stack Developer
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-600">
              I build scalable backends in <span className="font-semibold text-gray-800">Java</span> and
              fast, accessible frontends with <span className="font-semibold text-gray-800">Angular</span>.
              Automated deployments via <span className="font-semibold text-gray-800">Jenkins</span> or
              <span className="font-semibold text-gray-800"> GitHub Actions</span> on <span className="font-semibold text-gray-800">AWS</span>.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 transition">
                Let’s work together <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-gray-800 hover:bg-gray-50 transition">
                <Code2 className="h-4 w-4" /> View services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-blue-200/40 to-purple-200/40 blur-2xl" />
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-backdrop backdrop-blur">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="text-sm text-gray-500">Backend</p>
                  <p className="mt-1 font-semibold text-gray-900">Java • Spring</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="text-sm text-gray-500">Frontend</p>
                  <p className="mt-1 font-semibold text-gray-900">Angular</p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-4">
                  <p className="text-sm text-gray-500">Cloud</p>
                  <p className="mt-1 font-semibold text-gray-900">AWS</p>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-4 text-sm text-gray-600">
                CI/CD pipelines, IaC, observability and production ops baked in from day one.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
