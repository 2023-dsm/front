import styled from "styled-components";
import Head from "../head/head";
import CompanyItem from "./CompanyItem";
import { useState } from "react";
import DropDown from "../common/dropdown/index";

const CompanyList = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <Wrapper>
      <Head />
      <div className="setting">
        <h1>대전광역시 서구 괴정동</h1>
        <DropDown handleChange={handleDropdownChange} />
      </div>
      <CompanyListContainer>
        <CompanyItem selectedOption={selectedOption} />
      </CompanyListContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .setting {
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h1 {
      margin: 0;
      margin-left: 30px;
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
