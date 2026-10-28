import Contact from './components/Contact'
import Experience from './components/Experience'
import FeaturedProject from './components/FeaturedProject'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import { siteCopy } from './data/content'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1426] text-[#f5f7fa]">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-[#f5c850] px-4 py-3 font-semibold text-[#0a1426] focus:not-sr-only focus:outline-none focus-visible:ring-4 focus-visible:ring-[#78d7cd]"
      >
        {siteCopy.accessibility.skipToContent}
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
