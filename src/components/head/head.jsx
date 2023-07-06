import "./head.css";
import gosu from "../../../src/assets/고수.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Head() {
  const [name, setName] = useState();

  useEffect(() => {
    axios
      .get(`http://192.168.0.25:8080/user/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setName(res.data.name);
        console.log(res);
      });
  }, []);

  return (
    <div className="head">
      <img src={gosu} width="30px" />
      <span>{`${name}`}님 안녕하세요</span>
    </div>
  );
}

export default Head;
