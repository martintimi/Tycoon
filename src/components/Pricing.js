import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false);

  useEffect(() => {
    const checkbox = document.getElementById("checkbox");

    const handleCheckboxClick = () => {
      setIsMonthly(!isMonthly);
    };

    if (checkbox) {
      checkbox.addEventListener("click", handleCheckboxClick);
    }

    return () => {
      if (checkbox) {
        checkbox.removeEventListener("click", handleCheckboxClick);
      }
    };


    
  }, [isMonthly]);

  const basicPrice = isMonthly ? "$10" : "$120";
  const professionalPrice = isMonthly ? "$20" : "$240";
  const masterPrice = isMonthly ? "$30" : "$360";

  return (
    <section className="pricing">
      <span className="text-primary d-block">PRICING TABLE</span>
      <h1 className="header-with-line2 pt-3">Our Pricing Plan</h1>
      <p>
        There are many variations of passages of Lorem Ipsum available, but{" "}
        <br /> the majority have suffered alteration in some form.
      </p>

      <header>
        <div className="toggle">
          <label>Annually </label>
          <div className="toggle-btn">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label className="sub" id="sub" htmlFor="checkbox">
              <div className="circle"></div>
            </label>
          </div>
          <label> Monthly</label>
        </div>
      </header>
      <div className="cards">
        <div className="card shadow">
          <ul className="card_ul">
            <li className="pack">Single Use</li>
            <li id="basic" className="price bottom-bar">{basicPrice}</li>
            <li className="bottom-bar">Up to 5 users</li>
            <li className="bottom-bar">Free cancelation</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li>
              <button className="btn3">Start Free Trial</button>
            </li>
          </ul>
        </div>
        <div className="card active">
          <ul className="card_ul">
            <li className="pack">Multiple Use</li>
            <li id="professional" className="price bottom-bar">
              {professionalPrice}
            </li>
            <li className="bottom-bar">Up to 10 users</li>
            <li className="bottom-bar">Free cancelation</li>
            <li className="bottom-bar">Send up to 10 GB</li>
            <li>
              <button className="btn3 active-btn">Start Free Trial</button>
            </li>
          </ul>
        </div>
        <div className="card shadow">
          <ul className="card_ul">
            <li className="pack">Extended Use</li>
            <li id="master" className="price bottom-bar">{masterPrice}</li>
            <li className="bottom-bar">Up to 20 users</li>
            <li className="bottom-bar">Free cancelation</li>
            <li className="bottom-bar">Send up to 20 GB</li>
            <li>
              <button className="btn3">Start Free Trial</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
