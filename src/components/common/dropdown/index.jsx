import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ handleChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    handleChange(option);
  };

  return (
    <DropdownContainer>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="PUBLIC">공익활동</option>
        <option value="SOCIETY">사회서비스</option>
        <option value="MARKET">시장</option>
        <option value="JOB_INTRODUCTION">취업알선</option>
        <option value="SENIOR">시니어 인턴</option>
      </select>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  margin-right: 30px;

  select {
    outline: none;
    border: none;
    border-bottom: 1px solid #008000;
    padding: 5px;
    font-size: 14px;
  }
`;

export default Dropdown;
