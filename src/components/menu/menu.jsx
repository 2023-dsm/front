import "./menu.css";
import { useNavigate } from "react-router-dom";
import Way from "../../nextpages";

function Menu() {
  const navigate = useNavigate();

  const onClickWrite = () => {
    navigate("/write");
  };

  return (
    <div className="ah">
      <div className="resume">
        <p className="mp">
          <b>이력서 작성</b>
        </p>
        <div onClick={onClickWrite} className="paper">
          이력서 작성하기
        </div>
      </div>
      <div className="how">
        <p className="mp">
          <b>앱 사용 방법</b>
        </p>
        <a href="http://localhost:3000/next" className="menu-a">
          <div className="how paper">고수들의 직장 사용 방법</div>
        </a>
      </div>
    </div>
  );
}

export default Menu;
