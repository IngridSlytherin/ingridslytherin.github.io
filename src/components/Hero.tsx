import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { personal, siteCopy } from '../data/content'

export default function Hero() {
  const [hasProfileImage, setHasProfileImage] = useState(true)

  return (
    <section
      id="about"
      className="scroll-mt-24 relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="pointer-events-none absolute -right-36 top-12 -z-10 h-96 w-96 rounded-full bg-[#78d7cd]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#f5c850]/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#78d7cd]/25 bg-[#78d7cd]/10 px-4 py-2 text-sm font-medium text-[#a2eee5]">
            <span className="h-2 w-2 rounded-full bg-[#78d7cd]" aria-hidden="true" />
            {siteCopy.hero.locationLabel} {personal.location}
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#f5f7fa] sm:text-6xl lg:text-7xl">
            {personal.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-[#f5c850] sm:text-2xl">
            {personal.role}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {personal.introduction}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#f5c850] px-5 py-3 font-semibold text-[#172338] transition hover:bg-[#ffdc70]"
            >
              {siteCopy.hero.viewProjects}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 font-medium text-slate-100 transition hover:border-[#78d7cd]/50 hover:bg-[#78d7cd]/10"
            >
              <Github size={18} aria-hidden="true" />
              {siteCopy.hero.github}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 font-medium text-slate-100 transition hover:border-[#78d7cd]/50 hover:bg-[#78d7cd]/10"
            >
              <Linkedin size={18} aria-hidden="true" />
              {siteCopy.hero.linkedin}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 font-medium text-slate-100 transition hover:border-[#f5c850]/50 hover:bg-[#f5c850]/10"
            >
              {siteCopy.hero.resume}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border border-[#f5c850]/50 bg-gradient-to-br from-[#78d7cd]/20 to-[#f5c850]/20 p-2 shadow-[0_0_60px_rgba(120,215,205,0.12)] md:h-64 md:w-64">
          {hasProfileImage ? (
            <img
              src="/images/profile.jpg"
              alt={siteCopy.hero.profileAlt}
              width="256"
              height="256"
              className="h-full w-full rounded-full object-cover"
              onError={() => setHasProfileImage(false)}
            />
          ) : (
            <span
              role="img"
              aria-label={siteCopy.sections.profileInitials}
              className="text-5xl font-semibold tracking-widest text-[#f5c850] md:text-6xl"
            >
              IP
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
