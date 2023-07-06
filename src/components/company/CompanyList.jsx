import styled from "styled-components";
import Head from "../head/head";
import CompanyItem from "./CompanyItem";
import { useEffect, useState } from "react";
import DropDown from "../common/dropdown/index";
import axios from "axios";
import { Link } from "react-router-dom";

const CompanyList = () => {
  const [selectedOption, setSelectedOption] = useState("PUBLIC");
  const [data, setData] = useState([]);

  const handleDropdownChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    axios
      .get(`http://192.168.0.25:8080/recruitment/list?type=${selectedOption}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.recruitment_list);
        setData(res.data.recruitment_list);
      });
  }, [selectedOption]);

  return (
    <Wrapper>
      <Head />
      <div className="setting">
        <h1>대전광역시 서구 괴정동</h1>
        <DropDown handleChange={handleDropdownChange} />
      </div>
      <CompanyListContainer>
        {Array.isArray(data) &&
          data.map((item, idx) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/more/${item.recruitment_id}`}
            >
              <CompanyItem
                key={idx}
                activity_type={item.activity_type}
                company_name={item.company_name}
                number={item.number}
                work_area={item.work_area}
                work_name={item.work_name}
              />
            </Link>
          ))}
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
