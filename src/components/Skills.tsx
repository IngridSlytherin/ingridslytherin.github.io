import { skillGroups, siteCopy } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#78d7cd]">
          {siteCopy.sections.skills}
        </p>
        <h2 className="mb-9 text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-4xl">
          {siteCopy.sections.skills}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section
              key={group.name}
              aria-labelledby={`skill-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5 sm:p-6"
            >
              <h3
                id={`skill-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="mb-4 text-base font-semibold text-[#f5c850]"
              >
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#0a1426]/60 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
