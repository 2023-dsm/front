import styled from "styled-components";

const CompanyItem = () => {
  return (
    <Wrapper>
      <CompanyInfoContainer>
        <div className="address">
          <p>대전교육청</p>
          <p style={{ margin: "0px 0px 4px 0px" }}>|</p>
          <p>유성구 장동</p>
        </div>
        <p className="Job">학교 지킴이</p>
      </CompanyInfoContainer>
      <ActivityInfoContainer>
        <p>공익활동</p>
        <p>모집인원: 3</p>
      </ActivityInfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  width: 280px;
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

const ActivityInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    margin: 5px 0px 5px 0px;
    font-size: 12px;
  }
`;

export default CompanyItem;
