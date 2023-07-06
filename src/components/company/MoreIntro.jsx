import styled from "styled-components";
import leftArrow from "../../assets/leftArrow.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MoreIntro = () => {
  const [data, setData] = useState({
    company_name: "",
    detail_work_area: "",
    job_description: "",
    week_work_time: "",
    month_work_time: "",
    money: 0,
    manager: "",
    close_date: "",
  });
  const navigate = useNavigate();

  let { id } = useParams();
  const ID = String(id);

  useEffect(() => {
    axios
      .get(`http://192.168.0.25:8080/recruitment/detail/${ID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setData({
          company_name: res.data.company_name,
          close_date: res.data.close_date,
          detail_work_area: res.data.detail_work_area,
          job_description: res.data.job_description,
          manager: res.data.manager,
          money: res.data.money,
          month_work_time: res.data.month_work_time,
          week_work_time: res.data.week_work_time,
        });
      });
  }, []);

  const onClickArrow = () => {
    navigate("/main");
  };

  const onClickAdd = () => {
    axios
      .post(
        `http://192.168.1.149:8080/employment/apply/${ID}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then((res) => {
        alert("지원에 성공하셨습니다.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <Head>
        <div>
          <img onClick={onClickArrow} height={24} src={leftArrow} alt="<-" />
          <p>{data.company_name}</p>
        </div>
      </Head>
      <InfoContainer>
        <h1>근무지역</h1>
        <p>{data.detail_work_area}</p>
      </InfoContainer>
      <InfoContainer>
        <h1>직무내용</h1>
        <p>{data.job_description}</p>
      </InfoContainer>
      <TimeContainer>
        <InfoContainer>
          <h1>주근무시간</h1>
          <p>{data.week_work_time}</p>
        </InfoContainer>
        <InfoContainer>
          <h1>월근무시간</h1>
          <p>{data.month_work_time}</p>
        </InfoContainer>
      </TimeContainer>
      <InfoContainer>
        <h1>임금액</h1>
        <p>{data.money}원</p>
      </InfoContainer>
      <InfoContainer>
        <h1>구인담당자</h1>
        <p>성명: {data.manager}</p>
      </InfoContainer>
      <InfoContainer>
        <h1>접수 마감 일자</h1>
        <p>{data.close_date}</p>
      </InfoContainer>
      <NextButton>
        <input onClick={onClickAdd} type="submit" value={"지원하기"} />
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
