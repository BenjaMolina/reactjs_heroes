import React from "react";
import HeroeCard from "./HeroeCard";

function HeroeList(props) {
  const { heroes} = props;
  return (
    <div className="row">
      {heroes.map((heroe, index) => {
        return <HeroeCard heroe={heroe} key={index} />;
      })}      
    </div>
  );
}

export default HeroeList;
