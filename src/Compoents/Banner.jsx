import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const Banner = () => {

  return (
    <Swiper
    grabCursor={true}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCreative]}
    className="mySwiper mb-4"
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><img className='w-full h-[600px]' src='https://i.ibb.co/mG2HsJ0/old-books-436498-1920.jpg' alt="" /></SwiperSlide>

    <SwiperSlide><img className='w-full h-[600px]' src='https://i.ibb.co/KN3KCG6/library-488690-1920.jpg' alt="" /></SwiperSlide>


    <SwiperSlide><img className='w-full h-[600px]'  src="https://i.ibb.co/XzpPyCR/library-1147815-1920.jpg" alt="" /></SwiperSlide>

    <SwiperSlide><img className='w-full h-[600px]'  src="https://i.ibb.co/vVSsRft/bookshelf-413705-1920.jpg" alt="" /></SwiperSlide>
    ...
  </Swiper>
  )
}

export default Banner