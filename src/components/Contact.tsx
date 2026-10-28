import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { contact, siteCopy } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-[#78d7cd]/20 bg-gradient-to-br from-[#16344e] to-[#11243a] p-6 sm:p-10 lg:p-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#78d7cd]">
          {siteCopy.sections.contact}
        </p>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#f5f7fa] sm:text-4xl">
              {siteCopy.sections.contact}
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-300">{contact.message}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#78d7cd] px-4 py-3 font-semibold text-[#0a1426] transition hover:bg-[#a2eee5]"
            >
              <Linkedin size={18} aria-hidden="true" />
              {siteCopy.hero.linkedin}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 font-medium text-white transition hover:border-[#f5c850]/50 hover:text-[#f5c850]"
            >
              <Github size={18} aria-hidden="true" />
              {siteCopy.hero.github}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href={contact.email}
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 font-medium text-white transition hover:border-[#f5c850]/50 hover:text-[#f5c850]"
            >
              <Mail size={18} aria-hidden="true" />
              {siteCopy.sections.sendEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
