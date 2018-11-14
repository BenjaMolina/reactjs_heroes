import React from "react";
import HeroeCard from "./HeroeCard";

function Body(props) {
  return (
    <div className="container">
      <div className="row">
        <div class="col-md-4">
          <HeroeCard />
        </div>
      </div>
    </div>
  );
}

export default Body;
