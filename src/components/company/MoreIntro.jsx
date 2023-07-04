import styled from "styled-components";
import leftArrow from "../../assets/leftArrow.png";
import { useNavigate } from "react-router-dom";

const MoreIntro = ({ company_name }) => {
  const navigate = useNavigate();

  const onClickArrow = () => {
    navigate("/main");
  };

  return (
    <Wrapper>
      <Head>
        <div>
          <img onClick={onClickArrow} height={24} src={leftArrow} alt="<-" />
          <p>대전교육청</p>
        </div>
      </Head>
      <InfoContainer>
        <h1>근무지역</h1>
        <p>대덕소프트웨어마이스터고등학교</p>
      </InfoContainer>
      <InfoContainer>
        <h1>직무내용</h1>
        <p>
          1.활동시간 : 1일3시간/월10일/월30시간 2.활 동 비 : 월 27만원
          3.신청자격 : 만 65세 이상 기초연금수급자
        </p>
      </InfoContainer>
      <TimeContainer>
        <InfoContainer>
          <h1>주근무시간</h1>
          <p>주10일, 일 3시간</p>
        </InfoContainer>
        <InfoContainer>
          <h1>월근무시간</h1>
          <p>30시간</p>
        </InfoContainer>
      </TimeContainer>
      <InfoContainer>
        <h1>임금액</h1>
        <p>300,000원</p>
      </InfoContainer>
      <InfoContainer>
        <h1>구인담당자</h1>
        <p>성명: 김승진</p>
      </InfoContainer>
      <InfoContainer>
        <h1>접수 마감 일자</h1>
        <p>2023-07-01</p>
      </InfoContainer>
      <NextButton>
        <input type="submit" value={"지원하기"} />
      </NextButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 24px;
`;

const Head = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  position: relative;
  > div {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;

    > p {
      margin: 0;
      margin-left: 10px;
      font-size: 18px;
      font-weight: 500;
      color: black;
    }
  }
`;

const InfoContainer = styled.div`
  > h1 {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 14px;
    color: black;
  }

  > p {
    margin-bottom: 8px;
    font-size: 16px;
    color: black;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-right: 20px;
  }
`;

const NextButton = styled.div`
  > input {
    margin-top: 40px;
    cursor: pointer;
    width: 315px;
    height: 40px;
    border: 1px solid #008000;
    border-radius: 10px;
    background-color: #008000;
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
`;

export default MoreIntro;
