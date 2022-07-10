import React from "react";
import "../styles/Deals.scss";

function Deals() {
  return (
    <div className="deals-container">
      <h1>Best Deals</h1>
      <div className="deals">
        <div className="deal">
          <img
            src="https://unsplash.com/photos/SLU0U_a6fbQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjh8fHdhdGNoZXN8ZW58MHx8fHwxNjU3NDQwMDU0&force=true&w=1920"
            alt=""
          />
          <div className="desc">
            <h2 className="deal-heading">5% OFF</h2>
            <p className="deal-desc">Explore the best deals on Watches.</p>
          </div>
        </div>
        <div className="deal">
          <img
            src="https://unsplash.com/photos/pD_BtL20y48/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8fHwxNjU3NDM4MTUx&force=true&w=640"
            alt=""
          />
          {/* <h2 className="deal-heading">5% OFF</h2>
          <p className="deal-desc">Explore the best deals on Watches.</p> */}
        </div>
        <div className="deal">
          <img
            src="https://unsplash.com/photos/pD_BtL20y48/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8fHwxNjU3NDM4MTUx&force=true&w=640"
            alt=""
          />
          {/* <h2 className="deal-heading">5% OFF</h2>
          <p className="deal-desc">Explore the best deals on Watches.</p> */}
        </div>
        <div className="deal">
          <img
            src="https://unsplash.com/photos/pD_BtL20y48/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8fHwxNjU3NDM4MTUx&force=true&w=640"
            alt=""
          />
          {/* <h2 className="deal-heading">5% OFF</h2>
          <p className="deal-desc">Explore the best deals on Watches.</p> */}
        </div>
        <div className="deal">
          <img
            src="https://unsplash.com/photos/pD_BtL20y48/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fHdhdGNoZXN8ZW58MHx8fHwxNjU3NDM4MTUx&force=true&w=640"
            alt=""
          />
          {/* <h2 className="deal-heading">5% OFF</h2>
          <p className="deal-desc">Explore the best deals on Watches.</p> */}
        </div>
      </div>
    </div>
  );
}

export default Deals;
