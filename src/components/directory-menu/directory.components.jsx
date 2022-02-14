import { useSelector } from "react-redux";
import MenuItem from "../menu-item/menu-item.components";

import "./directory.styles.scss";

const Directory = () => {
  const directory = useSelector((state) => state.directory);
  return (
    <div className="directory-menu">
      {directory.map(({ title, id, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
