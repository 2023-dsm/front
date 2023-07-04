import { useState } from "react";
import styled from "styled-components";
import MenuPage from "../../../pages/menu";
import CurrentSituation from "../../currentSituation";

const Tab = () => {
  const [activetab, setActiveTab] = useState(0);

  const tabtitle = ["채용 기업", "채용 현황", "메뉴"];

  const tab = {
    0: <></>,
    1: <CurrentSituation />,
    2: <MenuPage />,
  };

  const onClickTab = (idx) => {
    setActiveTab(idx);
  };

  return (
    <>
      <TabWrapper>
        {tabtitle.map((title, idx) => {
          return (
            <TabItem
              key={idx}
              style={
                activetab === idx
                  ? {
                      color: "#ffffff",
                      borderColor: "#008000",
                      borderWidth: "2px",
                      height: "44.5px",
                      background: "#008000",
                    }
                  : { color: "#000000" }
              }
              onClick={() => {
                onClickTab(idx);
              }}
            >
              {title}
            </TabItem>
          );
        })}
      </TabWrapper>
      <></>
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
`;

const TabItem = styled.p`
  margin: 0;
  flex: 1;
  font-weight: 500;
  text-align: center;
  height: 44px;
  line-height: 44px;
  border-top: 1px solid gray;
`;

export default Tab;
