import React from "react";
import HeroeCard from "./HeroeCard";
import { Link } from "react-router-dom";

function HeroeList(props) {
  const { heroes } = props;
  return (
    <div>
      <div className="row justify-content-center">
        <Link 
          className="btn btn-lg btn-primary" 
          to="/heroe"
        >
          Nuevo Heroe
        </Link>
      </div>
      <div className="row mt-2">
        {heroes.map((heroe, index) => {
          return <HeroeCard heroe={heroe} key={index} />;
        })}
      </div>
    </div>
  );
}

export default HeroeList;
