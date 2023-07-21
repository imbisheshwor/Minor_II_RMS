import React from "react";
import PickMeals from "../Asset/pick-meals-image.png";
import ChooseMeals from "../Asset/choose-image.png";
import DeliveryMeals from "../Asset/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Welcome to Delightful Delivers, where we are passionate about bringing the finest culinary experiences straight to your doorstep. With an array of delectable options from diverse cuisines, we are here to satisfy your cravings, feed your senses, and provide you with an unparalleled food delivery service.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Whether you're a busy professional or simply looking to indulge in a gourmet treat at home, our carefully curated menu offers a wide array of delectable options to tantalize your taste buds. Read on to explore some of our signature meals",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Your Hunger, Our Priority - Lightning-Fast Food Delivery at Your Service!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))} 

        
      </div>
    </div>
  );
};

export default Work;
