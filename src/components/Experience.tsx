import { BriefcaseBusiness } from 'lucide-react'
import { experience, siteCopy } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#78d7cd]">
          {siteCopy.sections.experience}
        </p>
        <h2 className="mb-10 text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-4xl">
          {siteCopy.sections.experience}
        </h2>
        <ol className="relative ml-2 border-l border-[#78d7cd]/25">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
              <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#78d7cd]/40 bg-[#11243a] text-[#78d7cd]">
                <BriefcaseBusiness size={15} aria-hidden="true" />
              </span>
              <div className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#f5f7fa]">{job.role}</h3>
                    <p className="mt-1 font-medium text-[#f5c850]">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-400">{job.dates}</p>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">{job.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
