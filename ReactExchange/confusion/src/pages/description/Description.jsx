import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { Details } from '../../details';

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
    justifyContent: space-between;
`;

const Button = styled.button`
    margin-top: 20px;
    text-align: center;
    height: 40px;
    width: 110px;
    color: white;
    background: #F3692E;
    cursor: pointer;
    font-weight: 500;
    border-radius: 6px;
    border: none;

    &:hover{
        color: #F3692E;
        background: #f1c952;
    }
`;

const Condition = styled.h3`
    font-weight: 500;
    margin-top: 20px;
`;

const Guide = styled.h3`
    margin-top: 30px;
    font-weight: 500;
`;

const Description = () => {

    const userName = useParams();
    const product = Details.find(obj => {
        return obj.id == userName.id;
    });

    // let price = product.price.toLocaleString();

    return (
        <Container>
                <Wrapper>
                    <ImgContainer>
                        <Image src={product.productImage} alt='' />

                        <Guide>Cách nhận và sử dụng voucher </Guide>

                        <Desc>
                            {product.guide1} <br></br>
                            {product.guide2} <br></br>
                            {product.guide3} <br></br>
                            {product.guide4} <br></br>
                            {product.guide5} <br></br>
                        </Desc>
                    </ImgContainer>

                    <InfoContainer>
                        <Title> {product.title} </Title>

                        <Desc>
                            {product.description1} <br></br>
                            - {product.description2} <br></br>
                            - {product.description3} <br></br> <br></br>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff0000", }} /> {product.time} <br></br>
                        </Desc>

                        <Price> {product.price} <FontAwesomeIcon icon={faCoins} /></Price>

                        <AddContainer>
                            <Button>Lấy mã ngay</Button>
                        </AddContainer>

                        <br></br> <br></br>
                        <Condition> Điều kiện áp dụng </Condition>

                        <Desc>
                            {product.condition1} <br></br> <br></br>
                            {product.condition2} <br></br> <br></br>
                            {product.condition3} <br></br> <br></br>
                        </Desc>
                    </InfoContainer>
                </Wrapper>
        </Container>
    )
}
export default Description;