import React from "react";
import Carousel from "../../Components/Carousel";
import CategoryBar from "../../Components/CategoryBar/CategoryBar";
import Header from "../../Components/Header";

import { CategoryBarData } from "../../Datas";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="Home" style={{ marginTop: "0px" }}>
        <div className="Home-CategoryContainer" style={{ marginTop: "-50px" }}>
          <div className="Home-CategoryBar">
            {CategoryBarData.map((item, index) => (
              <CategoryBar
                key={index}
                Imgsrc={item.imageSrc}
                CategoryName={item.category}
              />
            ))}
          </div>
        </div>
      </div>
      <Carousel />
      <Header />
    </>
  );
};

export default Home;
