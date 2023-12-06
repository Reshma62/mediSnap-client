import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Banner1 from "../../assets/banner1.webp";
import Banner2 from "../../assets/banner2.webp";
import Banner3 from "../../assets/banner3.webp";
import Banner4 from "../../assets/banner4.webp";
const Slider = () => {
  const banner = [Banner1, Banner2, Banner3, Banner4];
  return (
    <div className="z-10 relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        draggable={true}
        autoplay={true}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {banner.map((img) => (
          <SwiperSlide key={img}>
            <img
              className="w-full h-[500px] "
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
