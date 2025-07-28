import HeroSection from '../components/Landing/HeroSection'
import Features from '../components/Landing/Features'
import HowItWorks from '../components/Landing/HowItWorks'
import Navbar from '../components/Dashboard/Navbar'
import BrandMarquee from '../components/Landing/BrandMarquee'
import FAQ from '../components/Landing/FAQ'
import CTA from '../components/Landing/CTA'

const Landing = () => {
  return (
    <div className="bg-white">
        <Navbar/>
      <HeroSection />
      <BrandMarquee/>
      <Features />
      <HowItWorks />
      <FAQ/>
      <CTA/>
     
    </div>
  )
}

export default Landing