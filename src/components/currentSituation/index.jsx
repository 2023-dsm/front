import styled from "styled-components";
import Head from "../head/head";
import Item from "./Item";
import axios from "axios";
import { useEffect, useState } from "react";

const CurrentSituation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.1.149:8080/employment/my`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.employment_list);
        setData(res.data.employment_list);
      });
  }, []);

  return (
    <Wrapper>
      <Head />
      <h1>채용현황</h1>
      <CurrentList>
        {Array.isArray(data) &&
          data.map((item, idx) => (
            <Item
              key={idx}
              company_name={item.company_name}
              status={item.status}
              work_area={item.work_area}
              work_name={item.work_name}
            />
          ))}
      </CurrentList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
    margin-left: 30px;
    margin-bottom: 14px;
    font-size: 16px;
  }
`;

const CurrentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  overflow: scroll;
`;

export default CurrentSituation;
