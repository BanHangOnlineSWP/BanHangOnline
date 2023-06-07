import React from "react";
import './Home.css';
class Home extends React.Component {
    render() {
        // import images
        const productImageDrinkHL = 'https://statics.vincom.com.vn/uu-dai/Highlands-coffee.jpg';
        const productImageTech = 'https://cdn-www.vinid.net/91e68594-samsung.jpg';
        const productImageFood = 'https://statics.vinpearl.com/am-thuc-phap-5_1642581433.jpg';
        const productImageDrinkPL = 'https://stc.shopiness.vn/deal/2021/07/07/a/d/6/1/1625640150660_540.png';
        const productImageFashionNike = 'https://giamgiatructuyen.com/wp-content/uploads/2021/10/ma-giam-gia-nike.jpg';
        const productImageFashionCoolmate = 'https://mcdn.coolmate.me/image/May2022/coolmate-shark-tank-9.jpg';

        return (
            <main>
                <div class="promo-all">
                    <div id="promo">
                        <img class="imgpromo imgP" src="assets/img/promo/promo1.png" />
                        <img class="imgpromo imgP" src="assets/img/promo/promo2.png" />
                        <img class="imgpromo imgP" src="assets/img/promo/promo3.png" />

                        <button class="image-button button-left" onclick="plusDivs(-1)">&#10094;</button>
                        <button class="image-button button-right" onclick="plusDivs(1)">&#10095;</button>
                    </div>

                    <div class="badge" style={{ width: '100%' }}>
                        <p class="image-badge" onclick="currentDiv(1)"></p>
                        <p class="image-badge" onclick="currentDiv(2)"></p>
                        <p class="image-badge" onclick="currentDiv(3)"></p>
                    </div>
                </div>

                <section id="product-all">
                    <div class="product">
                        <h1 class="product-detail">Our Voucher Collection</h1>
                        <ul class="nav-list">
                            <li><a href="index.html" class="active">Tất cả</a></li>
                            <li><a href="#">Thời trang</a></li>
                            <li><a href="#">Công nghệ và điện tử</a></li>
                            <li><a href="#">Thức ăn</a></li>
                            <li><a href="#">Làm đẹp</a></li>
                            <li><a href="#">Du lịch</a></li>
                            <li><a href="#">Khác</a></li>
                        </ul>

                        <div class="pro-container">

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageDrinkHL})` }}>
                                </div>
                                <div class="des">
                                    <p>Thức ăn</p>
                                    <h4>Mua 2 tính tiền 1 tại Highlands-coffee</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageTech})` }}>
                                </div>
                                <div class="des">
                                    <p>Công nghệ và điện tử</p>
                                    <h4>Giảm ngay 2,000,000đ Samsung Galaxy S23 Series</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageFood})` }}>
                                </div>
                                <div class="des">
                                    <p>Food&Drink</p>
                                    <h4>Nhà hàng ruby giảm 20% set valentine’s special menu</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageDrinkPL})` }}>
                                </div>
                                <div class="des">
                                    <p>thức ăn</p>
                                    <h4>giảm 20,000đ đồ uống phúc long siêu chất</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageFashionNike})` }}>
                                </div>
                                <div class="des">
                                    <p>thức ăn</p>
                                    <h4>nike giảm thêm 110k trên giá đã giảm</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageFashionCoolmate})` }}>
                                </div>
                                <div class="des">
                                    <p>Thời trang</p>
                                    <h4>coolmate giảm 100k cho đơn hàng từ 550k</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageDrinkPL})` }}>
                                </div>
                                <div class="des">
                                    <p>thức ăn</p>
                                    <h4>giảm 20,000đ đồ uống phúc long siêu chất</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageFood})` }}>
                                </div>
                                <div class="des">
                                    <p>Food&Drink</p>
                                    <h4>Nhà hàng ruby giảm 20% set valentine’s special menu</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageDrinkHL})` }}>
                                </div>
                                <div class="des">
                                    <p>Thức ăn</p>
                                    <h4>Mua 2 tính tiền 1 tại Highlands-coffee</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageTech})` }}>
                                </div>
                                <div class="des">
                                    <p>Công nghệ và điện tử</p>
                                    <h4>Giảm ngay 2,000,000đ Samsung Galaxy S23 Series</h4>
                                    <a class="pro_active" href="#"><i class="fa-solid fa-circle-arrow-right"></i></a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageFood})` }}>
                                </div>
                                <div class="des">
                                    <p>Food&Drink</p>
                                    <h4>Nhà hàng ruby giảm 20% set valentine’s special menu</h4>
                                    <a class="pro_active" href="#">
                                        <i class="pro-bth fa-solid fa-circle-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="pro">
                                <div class="pro_img" style={{ backgroundImage: `url(${productImageDrinkPL})` }}>
                                </div>
                                <div class="des">
                                    <p>thức ăn</p>
                                    <h4>giảm 20,000đ đồ uống phúc long siêu chất</h4>
                                    <a class="pro_active" href="#">
                                        <i class="fa-solid fa-circle-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="pro-more"><button id="product-more">Find out More</button></a>
                </section>

                <article class="story-all">
                    <div class="story">
                        <div class="imgStory"> <img src="assets/img/story/story.png" /> </div>
                        <article class="description-all">
                            <div class="description-all-detail">Câu chuyện về<br />Student Deal</div>
                            <div class="description">Student Deal là nơi cung cấp các khoản giảm giá đặc biệt dành cho sinh viên.
                                Chúng tôi có nhiều loại voucher và ưu đãi cho các mặt hàng và dịch vụ khác nhau, từ điện thoại di
                                động đến thực phẩm. Với Student Deal, bạn có thể tiết kiệm tiền một cách đơn giản và dễ dàng. Tìm
                                kiếm các ưu đãi của chúng tôi để giúp cuộc sống sinh viên của bạn trở nên dễ dàng hơn.</div>
                        </article>
                    </div>
                </article >

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
                            <div class="feedback-desc">I am very happy with the services provided, it is very helpful, starting
                                from the insight that the company gave from the start that I did not
                                understand what it was so I got knowledge and made my website
                                look better</div>
                            <div class="feedback-name">Anna Saraspova</div>
                            <div class="feedback-crear">Sinh viên đại học FPT</div>
                        </article>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;