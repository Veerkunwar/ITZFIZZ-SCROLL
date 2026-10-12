export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-12">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:col-span-7">
          We make websites that feel like someone cared about them.
        </h2>
        <div className="space-y-4 text-lg leading-relaxed md:col-span-4 md:col-start-9 md:pt-3">
          <p>Itzfizz is a small digital studio. We start on paper, argue about spacing, and only then open the code editor.</p>
          <p>The goal is simple: sites that load fast, read easily, and have just enough motion to be memorable.</p>
        </div>
      </div>
    </section>
  )
}
