import React from "react";
import HeroeCard from "./HeroeCard";

function HeroeList(props) {
  return (
    <div className="container">
      <div className="row">
        {props.heroes.map((heroe, index) => {
          return <HeroeCard heroe={heroe} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default HeroeList;
