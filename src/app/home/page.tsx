import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
} 