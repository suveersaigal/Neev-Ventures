import RecognitionsStrip from '../components/home/RecognitionsStrip'
import ImpactBar from '../components/home/ImpactBar'
import AwardMoment from '../components/home/AwardMoment'
import FeaturedStory from '../components/home/FeaturedStory'
import Mission from '../components/home/Mission'
import OurModel from '../components/home/OurModel'
import WomenStories from '../components/home/WomenStories'
import CallToAction from '../components/home/CallToAction'
import Hero from '../components/home/Hero'
import SEO from '../components/SEO'

const Home = () => {
  return (
    <>
      <SEO 
        title="Home"
        description="Neev Ventures builds access to training, financial literacy, and entrepreneurial support so overlooked women can create sustainable livelihoods."
        keywords="women empowerment, financial literacy, entrepreneurship, livelihoods, Neev Ventures"
      />
      <div className="overflow-hidden bg-champagne-200">
        <Hero />
        <ImpactBar />
        <Mission />
        <RecognitionsStrip />
        <AwardMoment />
        <FeaturedStory />
        <OurModel />
        <WomenStories />
        <CallToAction />
      </div>
    </>
  )
}

export default Home
