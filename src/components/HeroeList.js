import React from "react";
import HeroeCard from "./HeroeCard";

function HeroeList(props) {
  return (
    <div className="row">
      {props.heroes.map((heroe, index) => {
        return <HeroeCard heroe={heroe} key={index} />;
      })}
    </div>
  );
}

export default HeroeList;
