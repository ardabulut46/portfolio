import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ScrollSection from '@/components/ScrollSection';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollSection>
        <Hero />
      </ScrollSection>
      <ScrollSection>
        <About />
      </ScrollSection>
      <ScrollSection>
        <Projects />
      </ScrollSection>
      <ScrollSection>
        <Contact />
      </ScrollSection>
    </main>
  );
} 