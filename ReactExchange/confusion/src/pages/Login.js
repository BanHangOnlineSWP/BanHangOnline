import React from "react";
class Login extends React.Component {
    render() {
        return (
            // Login - Register
            <div class="signin">
                <div class="form-parent">
                    <div class="sign-up-img"></div>
                    <div class="sign-in-img"></div>

                    <div class="form-container">
                        <div class="form" id="sign-in-form">
                            <h1 class="title">Welcome to Student Deal</h1>
                            <h5 class="title-text">Sign in to continue your progress</h5>
                            <div class="fields">
                                <input type="text" placeholder="username" />
                                <input type="password" placeholder="password" />
                            </div>
                            <div class="check">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div class="submit-container">
                                <button type="submit" class="btn">sign in</button>
                                <p class="link" onclick="switchForm('register')">Don't have an account? Sign up here</p>
                            </div>
                        </div>

                        <div class="form" id="sign-up-form">
                            <h1 class="title">Sign up</h1>
                            <div class="fields">
                                <input type="text" placeholder="name" />
                                <input type="text" placeholder="username" />
                                <input type="text" placeholder="email" />
                                <input type="password" placeholder="password" />
                            </div>
                            <div class="submit-container">
                                <button type="submit" class="btn">sign up</button>
                                <p class="link" onclick="switchForm('login')">Already have an account? Sign in here</p>
                            </div>
                        </div>
                    </div>

                </div>

                <footer>
                    <div class="footer">
                        <div class="col">
                            <img class="footer-logo" src="assets/img/logo/logo2.png" alt="" />
                            <h4>Liên hệ chúng tôi</h4>
                            <p><strong>Số điện thoại:</strong> 028 7300 5588 </p>
                            <p><strong>Địa chỉ:</strong> Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ,
                                <br /> Thành Phố Thủ Đức, Thành phố Hồ Chí Minh 700000</p>
                            <p><strong>Thời gian:</strong> 8AM - 5PM </p>
                            <div class="follow">
                                <h4>Theo dõi chúng tôi qua</h4>
                                <div class="icon">
                                    <a href="#"><i class="fa fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa fab fa-instagram"></i></a>
                                    <a href="#"><i class="fa fab fa-youtube"></i></a>
                                    <a href="#"><i class="fa fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <h4>Về Student Deal</h4>
                            <a href="#">Giới thiệu về Student Deal</a>
                            <a href="#">Các nhà cung cấp</a>
                            <a href="#">Liên hệ truyền thông</a>
                            <a href="#">Liên hệ liên kết</a>
                        </div>

                        <div class="col">
                            <h4>Tài khoản của tôi</h4>
                            <a href="#">Đăng Nhập</a>
                            <a href="#">Voucher của tôi</a>
                            <a href="#">Thông tin tài khoản</a>
                            <a href="#">Trợ giúp</a>
                        </div>

                        <div class="col install">
                            <h4>Tải ứng dụng Student Deal</h4>
                            <div class="app">
                                <img src="assets/img/QR/app.png" />
                                <div class="app-kind">
                                    <h5><i class="fa-brands fa-apple"></i> App Store</h5>
                                    <h5><i class="fa-brands fa-google-play"></i> Google Play</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <script src="login/login.js"></script>
            </div>
        );
    }
}
export default Login;