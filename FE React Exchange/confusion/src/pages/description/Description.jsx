import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faClock } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
// import { Details } from "../../details";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";

import { Divider, Avatar, Grid, Paper } from "@mui/material";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Container = styled.div`
  margin-top: 150px;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-weight: 600;
`;

const Desc = styled.p`
  font-size: 18px;
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 30px;
  color: orange;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justifycontent: space-between;
`;

const Button = styled.button`
  margin-top: 20px;
  text-align: center;
  height: 40px;
  width: 140px;
  color: white;
  background: #f3692e;
  cursor: pointer;
  font-weight: 500;
  border-radius: 6px;
  border: none;

  &:hover {
    color: #f3692e;
    background: #f1c952;
  }
`;

const Condition = styled.h3`
  font-weight: 500;
  margin-top: 20px;
`;

const Guide = styled.h3`
  margin-top: 40px;
  font-weight: 500;
`;

const Description = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const [isCodeReceived, setIsCodeReceived] = useState(false);
  const { id } = useParams();
  const productId = parseInt(id); // Chuyển đổi id thành số nguyên
  const product = PRODUCTS.find((obj) => obj.id === productId);

  useEffect(() => {
    setIsCodeReceived(cartItems[id] > 0);
  }, [cartItems, id]);

  // let price = product.price.toLocaleString();

  const handleAddToCart = () => {
    addToCart(id);
    setIsCodeReceived(true);
  };

  const [value, setValue] = React.useState(2);
  const { duration } = props.data || {};
  const startDate = duration?.startDate || new Date();
  const endDate = duration?.endDate || new Date();

  // Adjust the month values by subtracting 1
  const formattedStartDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() - 1,
    startDate.getDate()
  );

  const formattedEndDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth() - 1,
    endDate.getDate()
  );

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} alt="" />

          <Guide>Cách nhận và sử dụng voucher </Guide>

          <Desc>
            {product.guide1} <br />
            {product.guide2} <br />
            {product.guide3} <br />
            {product.guide4} <br />
            {product.guide5} <br />
          </Desc>

          <div style={{ paddingRight: 14, marginRight: 50 }} className="App">
            <Guide>Đánh giá người dùng </Guide>

            <Paper style={{ padding: "40px 20px" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="Remy Sharp" src={imgLink} />
                </Grid>

                <Grid justifyContent="left" item xs zeroMinWidth>
                  {/* Rating */}
                  <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    size="small"
                  />

                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    Michel Michel
                  </h4>

                  <p style={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet.{" "}
                  </p>

                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>

              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="Remy Sharp" src={imgLink} />
                </Grid>

                <Grid justifyContent="left" item xs zeroMinWidth>
                  {/* Rating */}
                  <Rating
                    name="read-only"
                    value={value}
                    readOnly
                    size="small"
                  />

                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    Michel Michel
                  </h4>

                  <p style={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet.{" "}
                  </p>

                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </ImgContainer>

        <InfoContainer>
          <Title> {product.title} </Title>
          <Desc>
            {product.description1} <br /> <br />
            {product.description2} <br /> <br />
            {product.description3} <br /> <br />
            <FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} />{" "}
            {formattedStartDate.toLocaleDateString()} -{" "}
            {formattedEndDate.toLocaleDateString()} <br />
          </Desc>
          <Price>
            {" "}
            {product.price} <FontAwesomeIcon icon={faCoins} />
          </Price>
          <AddContainer>
            <Button
              className={`pro_bth ${isCodeReceived ? "code-received" : ""}`}
              onClick={isCodeReceived ? undefined : handleAddToCart}
            >
              {isCodeReceived
                ? "ĐÃ LẤY MÃ"
                : `NHẬN MÃ NGAY${
                    cartItems[PRODUCTS.id] > 0
                      ? ` (${cartItems[PRODUCTS.id]})`
                      : ""
                  }`}
            </Button>
          </AddContainer>
          <br /> <br />
          <Condition> Điều kiện áp dụng </Condition>
          <Desc>
            {product.condition1} <br /> <br />
            {product.condition2} <br /> <br />
            {product.condition3} <br /> <br />
          </Desc>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};
export default Description;
