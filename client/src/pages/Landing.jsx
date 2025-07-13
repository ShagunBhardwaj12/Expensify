import HeroSection from '../components/Landing/HeroSection'
import Features from '../components/Landing/Features'
import HowItWorks from '../components/Landing/HowItWorks'
import Testimonials from '../components/Landing/Testimonials'
import FAQ from '../components/Landing/FAQ'
import CTA from '../components/Landing/CTA'
import Navbar from '../components/Dashboard/Navbar'

const Landing = () => {
  return (
    <div className="bg-white">
        <Navbar/>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}

export default Landing