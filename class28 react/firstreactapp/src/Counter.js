import React, { useState } from "react";

const Counter = () => {
  const [sajjad, setSajjad] = useState(0);

  const handleIncrement = () => {
    if (sajjad < 10) {
      setSajjad(sajjad + 1);
    }
  };
  const handleDecrement = () => {
    if (sajjad > 0) {
      setSajjad(sajjad - 1);
    }
  };
  return (
    <>
      <section className="counter">
        <div className="counter-btn">
          <div onClick={handleIncrement} className="btn btn-success">
            ++
          </div>
          &nbsp;&nbsp;
          <div onClick={handleDecrement} className="btn btn-danger">
            --
          </div>
          <hr />
          <h1>{sajjad}</h1>
          <p>{sajjad}</p>
        </div>
      </section>
    </>
  );
};

export default Counter;
