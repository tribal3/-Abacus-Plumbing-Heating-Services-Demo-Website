import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { About } from './components/About'
import { Services } from './components/Services'
import { HeatingFeature } from './components/HeatingFeature'
import { Improvements } from './components/Improvements'
import { Gallery } from './components/Gallery'
import { Areas } from './components/Areas'
import { Steps } from './components/Steps'
import { Reviews } from './components/Reviews'
import { Faqs } from './components/Faqs'
import { Cta } from './components/Cta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <HeatingFeature />
        <Improvements />
        <Gallery />
        <Areas />
        <Steps />
        <Reviews />
        <Faqs />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
