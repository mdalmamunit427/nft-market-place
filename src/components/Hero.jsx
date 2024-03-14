import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Hero() {
  const styles = {
    bgGradient:
      "bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20",
    btn: "px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700",
  };

  return (
    <>
      <section className={`mt-3 relative overflow-hidden text-white `}>
        {/* Content */}
        <div className="container max-w-screen-xl mx-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img
                src="/images/banner/banner1.png"
                alt=""
                className="rounded-md h-60 md:h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner/banner2.png"
                alt=""
                className="rounded-md h-60 md:h-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/banner/banner3.png"
                alt=""
                className="rounded-md h-60 md:h-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Hero;
