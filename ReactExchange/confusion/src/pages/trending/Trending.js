import React from "react";
import './Trending.css';
import {NavLink, Link} from 'react-router-dom';

// import images
const productImageDrinkHL = 'https://statics.vincom.com.vn/uu-dai/Highlands-coffee.jpg';
const productImageTech = 'https://cdn-www.vinid.net/91e68594-samsung.jpg';
const productImageFood = 'https://statics.vinpearl.com/am-thuc-phap-5_1642581433.jpg';
const productImageDrinkPL = 'https://stc.shopiness.vn/deal/2021/07/07/a/d/6/1/1625640150660_540.png';
const productImageFashionNike = 'https://giamgiatructuyen.com/wp-content/uploads/2021/10/ma-giam-gia-nike.jpg';
const productImageFashionCoolmate = 'https://mcdn.coolmate.me/image/May2022/coolmate-shark-tank-9.jpg';


function Trending() {
    return (
        <main>
            <div className="trending">
                <img className="trending-img" src="assets/img/trending/Hero.png" alt="" />
            </div>

            <div className="voucher-all">
                <div className="voucher-trending">
                    <h1 class="voucher-title">Top Voucher</h1>

                    <div className="voucher-container">

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageDrinkHL})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thức uống</p>
                                <h4>Mua 2 tính tiền 1 tại Highlands-coffee</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageTech})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Công nghệ và điện tử</p>
                                <h4>Giảm ngay 2,000,000đ Samsung Galaxy S23 Series</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageFood})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Nhà hàng</p>
                                <h4>Nhà hàng ruby giảm 20% set valentine’s special menu</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageDrinkPL})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thức uống</p>
                                <h4>Giảm 20,000đ đồ uống phúc long siêu chất</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageFashionNike})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thời trang</p>
                                <h4>Nike giảm thêm 110k trên giá đã giảm</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageFashionCoolmate})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thời trang</p>
                                <h4>Coolmate giảm 100k cho đơn hàng từ 550k</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageDrinkPL})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thức uống</p>
                                <h4>Giảm 20,000đ đồ uống phúc long siêu chất</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageFood})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Nhà Hàng</p>
                                <h4>Nhà hàng ruby giảm 20% set valentine’s special menu</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageDrinkHL})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thức uống</p>
                                <h4>Mua 2 tính tiền 1 tại Highlands-coffee</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageTech})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Công nghệ và điện tử</p>
                                <h4>Giảm ngay 2,000,000đ Samsung Galaxy S23 Series</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageFood})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Nhà hàng</p>
                                <h4>Nhà hàng ruby giảm 20% set valentine’s special menu</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                        <div class="voucher">
                            <div class="voucher-img" style={{ backgroundImage: `url(${productImageDrinkPL})` }}>
                            </div>
                            <div class="voucher-detail">
                                <p>Thức uống</p>
                                <h4>Giảm 20,000đ đồ uống phúc long siêu chất</h4>
                                <a href="#"><NavLink to="/description" className={"voucher-active"}><i class="fa-solid fa-circle-arrow-right"></i></NavLink></a>
                            </div>
                        </div>

                    </div>
                </div>
                <a href="#" class="voucher-more"><button id="voucher-more">Find out More</button></a>
            </div>
        </main>

    );
}

export default Trending;