import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

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
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 800;
`;

const Desc = styled.p`
    font-size: 20px;
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
    justify-content: space-between;
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
    font-weight: 800;
`;

const Guide = styled.h3`
    margin-top: 30px;
    font-weight: 800;
`;

const Description = () => {
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://truereview.com.vn/wp-content/uploads/2023/05/ma-giam-gia-highland-25k.png" />

                    <Guide>Cách lấy và sử dụng Voucher</Guide>
                    <Desc>
                        Bước 1: Chọn voucher trên website Student Deal. <br></br><br></br>

                        Bước 2: Nhấn nút “Add Voucher” để nhận voucher. <br></br><br></br>

                        Bước 3: Vào My Vouchers và nhấn voucher đã nhận. <br></br><br></br>

                        Bước 4: Nó sẽ hiện ra mã Code. <br></br><br></br>

                        Bước 5: Xuất trình mã code của voucher tại cửa hàng được ủy quyền để sử dụng ưu đãi. <br></br><br></br>
                    </Desc>
                </ImgContainer>

                <InfoContainer>
                    <Title>Voucher giảm 25k Highlands</Title>

                    <Desc>Voucher áp dụng khi mua hóa đơn từ 120K đồ uống Highland sẽ được giảm 25K.<br></br><br></br>
                        – Khách hàng có thể trả thêm tiền để đổi ly cỡ nhỏ trong combo sang cỡ vừa hoặc lớn<br></br><br></br>
                        – Không áp dụng cho sản phẩm Trà Nhiệt Đới / Trà Dưa Hấu Vải <br></br><br></br>

                        Thời gian áp dụng: Từ 01/07/2023 đến hết 15/07/2023.
                    </Desc>

                    <Price>20 <FontAwesomeIcon icon={faCoins} /></Price>

                    <AddContainer>
                        <Button>Lấy mã ngay</Button>
                    </AddContainer>

                    <br></br> <br></br>
                    <Condition>Điều kiện áp dụng</Condition>
                    <Desc>
                        Mỗi mã khuyến mãi chỉ được sử dụng 01 lần và chỉ áp dụng trên 01 hóa đơn. <br></br> <br></br>

                        Không áp dụng cùng các chương trình khuyến mãi khác và các đối tác giao hàng. <br></br> <br></br>

                        Voucher áp dụng toàn quốc, ngoại trừ các cơ sở:
                        Highlands Coffee Dinh Độc Lập bên trong, Grand World Phú Quốc, VinWonders Phú Quốc
                        và sân bay trên toàn quốc. <br></br> <br></br>
                    </Desc>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}
export default Description;