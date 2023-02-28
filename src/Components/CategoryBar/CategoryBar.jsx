import React from "react";
import "./CategoryBar.css";
const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <div className="CategoryBar" style={{ marginBottom: "0px" }}>
      <div style={{ cursor: "pointer" }} className="categoryBar-Img">
        <img src={Imgsrc} alt="CategoryImg" />
      </div>
      <p className="categoryBar-name">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;
