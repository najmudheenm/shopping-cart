import "./menu-item.styles.scss";
import { useNavigate } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size }) => {
  const navigate = useNavigate();
  const navigateCollection = () => {
    navigate(`collection/${title.toLowerCase()}`);
  };
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>
      <div className="content" onClick={navigateCollection}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sutitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
