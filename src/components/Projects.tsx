import { ArrowUpRight, Github } from 'lucide-react'
import { useState } from 'react'
import { projects, siteCopy } from '../data/content'

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hasImage, setHasImage] = useState(true)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11243a]/65 transition duration-300 hover:-translate-y-1 hover:border-[#78d7cd]/35 hover:shadow-[0_18px_55px_rgba(120,215,205,0.08)]">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#16344e] via-[#11243a] to-[#0a1426] px-6">
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.name} ${siteCopy.accessibility.projectPreview}`}
            width="640"
            height="360"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setHasImage(false)}
          />
        ) : (
          <span className="max-w-xs text-center text-lg font-semibold text-slate-300/90">
            {project.name}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-[#f5f7fa]">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${project.name} ${siteCopy.accessibility.technologies}`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#f5c850] transition-colors hover:text-[#ffe28d]"
          >
            <Github size={17} aria-hidden="true" />
            {siteCopy.sections.code}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#78d7cd] transition-colors hover:text-[#a2eee5]"
            >
              {siteCopy.sections.liveDemo}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#78d7cd]">
          {siteCopy.sections.selectedWork}
        </p>
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-4xl">
            {siteCopy.sections.projects}
          </h2>
          <p className="max-w-md text-slate-300">{siteCopy.sections.selectedWorkDescription}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
