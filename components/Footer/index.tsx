import React from "react";

const Footer = () => {
  return (
    <div
      style={{ background: "#141718" }}
      className="w-100 py-5 px-5 d-flex flex-wrap flex-column justify-content-center align-items-center text-white"
    >
      <div
        className="w-75 d-flex flex-wrap align-content-sm-between flex-column flex-lg-row pb-5 justify-content-sm-between"
        style={{ borderBottom: "0.5px solid #f3f5f743" }}
      >
        <div>
          <big>Steppas</big> &nbsp;&nbsp;| &nbsp;&nbsp;
          <small>Sports collection.</small>
        </div>

        <div className="d-flex flex-column pt-sm-3 flex-lg-row">
          <div className="mx-3">Home</div>
          <div className="mx-3">Shop</div>
          <div className="mx-3">Products</div>
          <div className="mx-3">Blog</div>
          <div className="mx-3">Contact Us</div>
        </div>
      </div>

      <div className="w-75 w-sm-100 d-flex flex-column flex-lg-row pt-3 justify-content-between align-content-center">
        <div style={{ fontSize: "small", fontWeight: "100" }}>
          Copyright &copy;{new Date().getFullYear()} Steppas - All rights
          reserved.
        </div>

        <div className="d-flex ">
          <div className="mx-2">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="mx-2">
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="mx-2">
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
