import { useState } from "react";
import styled from "styled-components";
import MenuPage from "../../../pages/menu";
import CurrentSituation from "../../currentSituation";
import CompanyList from "../../company/CompanyList";
import Company from "../../../assets/tab/company.png";
import menu from "../../../assets/tab/menu.png";
import people from "../../../assets/tab/people.png";
import grayCompany from "../../../assets/tab/grayCompany.png";
import grayMenu from "../../../assets/tab/grayMenu.png";
import grayPeople from "../../../assets/tab/grayPeople.png";

const Tab = () => {
  const [activetab, setActiveTab] = useState(0);

  const tabtitle = [
    { title: "채용 기업", onImg: Company, offImg: grayCompany },
    { title: "채용 현황", onImg: people, offImg: grayPeople },
    { title: "메뉴", onImg: menu, offImg: grayMenu },
  ];

  const tab = {
    0: <CompanyList />,
    1: <CurrentSituation />,
    2: <MenuPage />,
  };

  const onClickTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <>
      <TabWrapper>
        {tabtitle.map((item, idx) => {
          return (
            <TabItem
              key={idx}
              onClick={() => {
                onClickTab(idx);
              }}
            >
              <img
                style={{ margin: "5px 0px 0px 0px" }}
                src={activetab === idx ? item.onImg : item.offImg}
                alt=""
              />
              <p style={{ color: activetab === idx ? "#000000" : "#D9D9D9" }}>
                {item.title}
              </p>
            </TabItem>
          );
        })}
      </TabWrapper>
      {tab[activetab]}
    </>
  );
};

const TabWrapper = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
`;

const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex: 1;

  > p {
    display: flex;
    align-items: center;
    margin: 0;
    height: 30px;
    font-weight: 500;
  }
  height: 60px;
  line-height: 44px;
`;

export default Tab;
