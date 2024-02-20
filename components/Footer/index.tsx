import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{ background: "#141718" }}
      className="w-100 py-2 mt-5 px-5 d-flex flex-wrap flex-column justify-content-between align-items-center text-white"
    >
      <section className="d-flex justify-content-between p-2 text-white"></section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <p className="text-uppercase fw-bold">
                Steppas | Sports Collection
              </p>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: " 60px",
                  backgroundColor: "#f8f8f8",
                  height: "2px",
                }}
              />
              <p>
                Welcome to my realm of pixels and code! {`I'm `}Moe, a frontend
                web developer with a fiery passion for iOS and Swift.
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#f8f8f8",
                  height: "2px",
                }}
              />
              <p>
                <a href="/#about" className="text-light">
                  About
                </a>
              </p>
              <p>
                <a href="/#services" className="text-light">
                  Services
                </a>
              </p>
              <p>
                <a href="/#projects" className="text-light">
                  Projects
                </a>
              </p>
              <p>
                <Link href="/contact" className="text-light">
                  Get in touch
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Office</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#f8f8f8",
                  height: "2px",
                }}
              />
              <p>Co-op villas, Badore, Lagos.</p>
              <p>District 1, HMC</p>
              <p>Abakaliki </p> <p>Ebonyi, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
      <hr
        className="mb-4 mt-0 d-inline-block mx-auto"
        style={{
          width: "80%",
          backgroundColor: "#f8f8f8",

          height: "0.5px",
        }}
      />
      <div
        className="text-center py-3 container"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}
      >
        Copyright © 2024 Steppas Collections. All rights reserved.&nbsp;{" "}
        <span className="text-dark">
          | Privacy Policy &nbsp; | &nbsp;Terms and Conditions.
        </span>
      </div>
    </div>
  );
};

export default Footer;
