export default function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Have a project in mind?</h2>
          <p className="mt-2 text-white/90">
            I can help you architect, build, and scale it—from idea to production.
          </p>
          <form className="mt-6 grid gap-3 sm:grid-cols-3">
            <input className="w-full rounded-md border-0 px-4 py-3 text-gray-900" placeholder="Your name" />
            <input className="w-full rounded-md border-0 px-4 py-3 text-gray-900" placeholder="Email" type="email" />
            <button type="submit" className="rounded-md bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition">
              Get in touch
            </button>
          </form>
          <p className="mt-3 text-sm text-white/80">Or email: you@yourdomain.com</p>
        </div>
      </div>
    </section>
  );
}
