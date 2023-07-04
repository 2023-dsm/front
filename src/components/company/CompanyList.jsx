import styled from "styled-components";
import Head from "../head/head";
import CompanyItem from "./CompanyItem";

const CompanyList = () => {
  return (
    <Wrapper>
      <Head />
      <div className="setting">
        <h1>유성구 장동</h1>
      </div>
      <CompanyListContainer>
        <CompanyItem />
      </CompanyListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .setting {
    display: flex;
    align-items: center;

    > h1 {
      margin: 0;
      margin-left: 30px;
      margin-bottom: 14px;
      font-size: 16px;
    }
  }
`;

const CompanyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  overflow: scroll;
`;

export default CompanyList;
