import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary">
      <Header />
      <main className="w-full pt-16 flex-1 bg-surface">
        <div className="flex flex-col w-full">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}
