import { ArrowUpRight } from 'lucide-react'
import { personal, siteCopy } from '../data/content'

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-7 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteCopy.sections.copyright} · {siteCopy.sections.footer}
        </p>
        <a
          href={personal.sourceRepository}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 self-start font-medium text-slate-300 transition-colors hover:text-[#78d7cd]"
        >
          {siteCopy.sections.sourceCode}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
