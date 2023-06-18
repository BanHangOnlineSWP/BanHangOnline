import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { EffectFade } from 'swiper';
function Slider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <img class="imgpromo imgP" src="assets/img/promo/promo1.png" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img class="imgpromo imgP" src="assets/img/promo/promo2.png" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img class="imgpromo imgP" src="assets/img/promo/promo3.png" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
        </Swiper>
    );
}

export default Slider;