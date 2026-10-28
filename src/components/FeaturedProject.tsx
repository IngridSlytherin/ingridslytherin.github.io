import { Check, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { featuredProject, siteCopy } from '../data/content'

export default function FeaturedProject() {
  const [hasLogo, setHasLogo] = useState(true)
  const [hasGameplayImage, setHasGameplayImage] = useState(true)

  return (
    <section id="featured" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#78d7cd]">
              {siteCopy.sections.featured}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-4xl">
              {featuredProject.name}
            </h2>
          </div>
          <span className="rounded-full border border-[#78d7cd]/30 bg-[#78d7cd]/10 px-4 py-2 text-sm font-medium text-[#a2eee5]">
            {featuredProject.status}
          </span>
        </div>

        <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#11243a]/75 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#78d7cd]/30 hover:shadow-[0_20px_80px_rgba(120,215,205,0.08)]">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-10">
            <div>
              <div className="mb-6 flex h-24 items-center justify-center rounded-2xl border border-white/10 bg-[#0a1426]/65 px-5">
                {hasLogo ? (
                  <img
                    src={featuredProject.logo}
                    alt={`${featuredProject.name} logo`}
                    width="480"
                    height="120"
                    loading="lazy"
                    className="max-h-16 w-auto max-w-full object-contain"
                    onError={() => setHasLogo(false)}
                  />
                ) : (
                  <span className="text-center text-xl font-bold tracking-wide text-[#f5c850]">
                    {featuredProject.name}
                  </span>
                )}
              </div>
              <p className="text-base leading-7 text-slate-300">
                {featuredProject.description}
              </p>
              <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#f5f7fa]">
                {siteCopy.sections.whatIBuilt}
              </h3>
              <ul className="mt-4 space-y-3">
                {featuredProject.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <Check size={17} className="mt-1 shrink-0 text-[#78d7cd]" aria-hidden="true" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              {hasGameplayImage && (
                <img
                  src={featuredProject.siteImage}
                  alt={`${featuredProject.name} ${siteCopy.accessibility.sitePreview}`}
                  width="960"
                  height="540"
                  loading="lazy"
                  className="mb-7 aspect-video w-full rounded-2xl border border-white/10 object-cover"
                  onError={() => setHasGameplayImage(false)}
                />
              )}
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f5f7fa]">
                {siteCopy.sections.stack}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#78d7cd] px-5 py-3 font-semibold text-[#0a1426] transition hover:bg-[#a2eee5] lg:mt-8"
              >
                {siteCopy.sections.playIt}
                <ExternalLink size={17} aria-hidden="true" />
                <span className="sr-only">{featuredProject.name}</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
