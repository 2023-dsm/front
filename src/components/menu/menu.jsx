import "./menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const onClickWrite = () => {
    navigate("/write");
  };

  return (
    <div className="ah">
      <div className="resume">
        <p>
          <b>이력서 작성</b>
        </p>
        <div onClick={onClickWrite} className="paper">
          이력서 작성하기
        </div>
      </div>
      <div className="how">
        <p>
          <b>앱 사용 방법</b>
        </p>
        <div className="how paper">고수들의 직장 사용 방법</div>
      </div>
    </div>
  );
}

export default Menu;
