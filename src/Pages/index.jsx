import Navigation from '../components/ui/navigation'
import HeroBanner from '../components/mainPage/heroBanner'
import Brands from '../components/mainPage/brands'
import NewArrivals from '../components/mainPage/newArrivals'
import FollowUs from '../components/mainPage/FollowUs'
import Features from '../components/mainPage/Features'
import Testimonial from '../components/mainPage/testimonial'
import Subscribe from '../components/mainPage/Subscribe'
import Footer from '../components/ui/footer'
import CartButton from '../components/cartPage/CartButton'

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
          <CartButton />
          <Footer/>
      </div>
  )
}

export default Index