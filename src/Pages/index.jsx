import Navigation from '../components/common/navigation'
import HeroBanner from '../components/mainpage/heroBanner'
import Brands from '../components/mainpage/brands'
import NewArrivals from '../components/mainpage/newArrivals'
import FollowUs from '../components/mainpage/FollowUs'
import Features from '../components/mainpage/Features'
import Testimonial from '../components/mainpage/testimonial'
import Subscribe from '../components/mainpage/Subscribe'
import Footer from '../components/common/footer'

const Index = () => {
  return (
    <div className='w-[100vw] min-h-screen relative flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500'>
          <Navigation/>  
          <HeroBanner/>
          <Brands/>
          <NewArrivals/>
          <Features/>
          <FollowUs/>
          <Testimonial/>
          <Subscribe/>
          <Footer/>
      </div>
  )
}

export default Index