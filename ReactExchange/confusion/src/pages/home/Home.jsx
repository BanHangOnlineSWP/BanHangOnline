import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { EffectFade } from "swiper";

import { PRODUCTS } from "../../products";
import { Product } from "./Product";

// import images
// const productImageDrinkHL =
//   "https://statics.vincom.com.vn/uu-dai/Highlands-coffee.jpg";
// const productImageTech = "https://cdn-www.vinid.net/91e68594-samsung.jpg";
// const productImageFood =
//   "https://statics.vinpearl.com/am-thuc-phap-5_1642581433.jpg";
// const productImageDrinkPL =
//   "https://stc.shopiness.vn/deal/2021/07/07/a/d/6/1/1625640150660_540.png";
// const productImageFashionNike =
//   "https://giamgiatructuyen.com/wp-content/uploads/2021/10/ma-giam-gia-nike.jpg";
// const productImageFashionCoolmate =
//   "https://mcdn.coolmate.me/image/May2022/coolmate-shark-tank-9.jpg";

function Home() {
  return (
    <main>
      <div class="promo-all">
        <div id="promo">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img class="imgpromo" src="assets/img/promo/promo2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="imgpromo" src="assets/img/promo/promo2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img class="imgpromo" src="assets/img/promo/promo3.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Product  */}
      <section id="product-all">
        <div class="product">
          <h1 class="product-detail">Our Voucher Collection</h1>
          <ul class="nav-list">
            <li>
              <a href="index.html" class="active">
                Tất cả
              </a>
            </li>
            <li>
              <a href="#">Thời trang</a>
            </li>
            <li>
              <a href="#">Công nghệ và điện tử</a>
            </li>
            <li>
              <a href="#">Thức ăn</a>
            </li>
            <li>
              <a href="#">Làm đẹp</a>
            </li>
            <li>
              <a href="#">Du lịch</a>
            </li>
            <li>
              <a href="#">Khác</a>
            </li>
          </ul>

          <div class="pro-container">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>

        <a href="#" class="pro-more">
          <button id="product-more">Find out More</button>
        </a>
      </section>

      {/* Top Voucher  */}
      <section class="scrollbar-all">
        <div>
          <h1 class="product-detail">Top Voucher</h1>
        </div>
        <div class="wrapper">
          <ul class="scrollbar">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </ul>
        </div>
      </section>

      <article class="story-all">
        <div class="story">
          <div class="imgStory">
            {" "}
            <img src="assets/img/story/story.png" />{" "}
          </div>
          <article class="description-all">
            <div class="description-all-detail">
              Câu chuyện về
              <br />
              Student Deal
            </div>
            <div class="description">
              Student Deal là nơi cung cấp các khoản giảm giá đặc biệt dành cho
              sinh viên. Chúng tôi có nhiều loại voucher và ưu đãi cho các mặt
              hàng và dịch vụ khác nhau, từ điện thoại di động đến thực phẩm.
              Với Student Deal, bạn có thể tiết kiệm tiền một cách đơn giản và
              dễ dàng. Tìm kiếm các ưu đãi của chúng tôi để giúp cuộc sống sinh
              viên của bạn trở nên dễ dàng hơn.
            </div>
          </article>
        </div>
      </article>

      <div class="partner">
        <div class="partner-detail">Các đối tác của chúng tôi</div>
        <div class="partner-img">
          <img src="assets/img/partner/bhd.png" />
          <img src="assets/img/partner/coolmate.png" />
          <img src="assets/img/partner/gongcha.png" />
          <img src="assets/img/partner/hotpot.png" />
          <img src="assets/img/partner/ticketbox.png" />
          <img src="assets/img/partner/travelloka.png" />
        </div>
      </div>

      <div class="feedback-all">
        <div class="feedback">
          <img src="assets/img/feedback/feedback1.png" />
          <article class="feedback-description">
            <div class="feedback-detail"> Đánh giá của sinh viên</div>
            <div class="feedback-desc">
              I am very happy with the services provided, it is very helpful,
              starting from the insight that the company gave from the start
              that I did not understand what it was so I got knowledge and made
              my website look better
            </div>
            <div class="feedback-name">Anna Saraspova</div>
            <div class="feedback-crear">Sinh viên đại học FPT</div>
          </article>
        </div>
      </div>
    </main>
  );
}
export default Home;
