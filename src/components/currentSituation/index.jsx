import styled from "styled-components";
import Head from "../head/head";
import Item from "./Item";

const CurrentSituation = () => {
  return (
    <Wrapper>
      <Head />
      <h1>채용현황</h1>
      <CurrentList>
        <Item />
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
