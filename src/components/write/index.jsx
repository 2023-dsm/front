import styled from "styled-components";
import leftArrow from "../../assets/leftArrow.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const [writeData, setWriteData] = useState({
    address: "",
    introduce: "",
    career: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setWriteData({
      ...writeData,
      [name]: value,
    });
  };

  const onClickArrow = () => {
    navigate("/main");
  };

  return (
    <Wrapper>
      <Head>
        <div>
          <img onClick={onClickArrow} height={24} src={leftArrow} alt="<-" />
          <p>이력서 작성</p>
        </div>
      </Head>
      <UserInfoContainer>
        <div className="a">
          <InfoContainer>
            <h1>이름</h1>
            <p>김승진</p>
          </InfoContainer>
          <InfoContainer>
            <h1 style={{ marginBottom: "11px" }}>나이</h1>
            <p style={{ marginBottom: "6px" }}>65</p>
          </InfoContainer>
          <InfoContainer>
            <h1>성별</h1>
            <p>여성</p>
          </InfoContainer>
        </div>
        <InfoContainer>
          <h1>전화번호</h1>
          <p>82+01012345678</p>
        </InfoContainer>
      </UserInfoContainer>
      <InputContainer>
        <p>주소</p>
        <input
          onChange={onChange}
          name="address"
          placeholder="주소를 입력해주세요"
        />
      </InputContainer>
      <InputContainer>
        <p>소개</p>
        <input
          onChange={onChange}
          name="introduce"
          placeholder="자기소개를 입력해주세요"
        />
      </InputContainer>
      <InputAreaContainer>
        <p>경력사항</p>
        <textarea
          onChange={onChange}
          name="career"
          placeholder="경력사항을 입력해주세요"
        />
      </InputAreaContainer>
      <NextButton>
        <input type="submit" />
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
  margin-bottom: 40px;
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

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .a {
    display: flex;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  margin-right: 14px;
  > h1 {
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }

  > p {
    margin-bottom: 5px;
    font-size: 16px;
    color: black;
  }
`;

const InputContainer = styled.div`
  > p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }
  > input {
    margin-top: 5px;
    outline: none;
    width: 300px;
    height: 40px;
    padding-left: 8px;
    border: 1px solid #008000;
    border-radius: 8px;
  }
`;

const InputAreaContainer = styled.div`
  > p {
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    color: black;
  }
  > textarea {
    margin-top: 5px;
    outline: none;
    width: 300px;
    height: 90px;
    padding: 8px;
    border: 1px solid #008000;
    border-radius: 8px;
    resize: none;
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

export default Write;
