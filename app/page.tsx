import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { MajesticHero } from '@/components/majestic-hero'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { TeamSection } from '@/components/team-section'
import { TechnologySection } from '@/components/technology-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <MajesticHero />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <TechnologySection />
        <TeamSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
