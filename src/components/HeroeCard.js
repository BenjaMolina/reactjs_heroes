import React, { Component } from "react";

class HeroeCard extends Component {
  render() {
    return (
      <div class="card mb-4 shadow-sm">
        <img
          class="card-img-top"
          src="https://i.pinimg.com/originals/71/ea/11/71ea118b8a7406492cd18ecfc8e61b94.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroeCard;
