import styled from "styled-components";

const Item = ({ company_name, work_area, work_name, status }) => {
  return (
    <Wrapper>
      <CompanyInfoContainer>
        <div className="address">
          <p>{company_name}</p>
          <p style={{ margin: "0px 0px 4px 0px" }}>|</p>
          <p>{work_area}</p>
        </div>
        <p className="Job">{work_name}</p>
      </CompanyInfoContainer>
      <StateContainer>
        <p>{status === 0 ? "진행중" : "완료"}</p>
      </StateContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 300px;
  height: 50px;
  border: 1px solid #008000;
  border-radius: 8px;
`;

const CompanyInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  .address {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 4px;
    > p {
      margin: 0;
      font-size: 14px;
      color: #939393;
    }
  }

  .Job {
    margin: 0;
    font-size: 16px;
  }
`;

const StateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid #008000;

  > p {
    font-size: 12px;
  }
`;

export default Item;
