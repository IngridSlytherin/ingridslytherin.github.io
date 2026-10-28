import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { personal, siteCopy } from '../data/content'

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a1426]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#about"
          className="font-semibold tracking-tight text-white transition-colors hover:text-[#f5c850]"
          onClick={() => setIsMenuOpen(false)}
        >
          {personal.name}
        </a>
        <button
          type="button"
          className="rounded-lg border border-white/15 p-2 text-slate-200 transition-colors hover:border-[#78d7cd]/50 hover:text-[#78d7cd] md:hidden"
          aria-label={isMenuOpen ? siteCopy.hero.menuClose : siteCopy.hero.menuOpen}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          aria-label={siteCopy.hero.navigationLabel}
          className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-[#0a1426] p-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {siteCopy.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-[#78d7cd] md:px-0 md:py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
