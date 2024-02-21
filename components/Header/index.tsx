"use client";

import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="w-100 h-auto p-0">
        <div
          style={{ background: "#38CB89", fontSize: "small" }}
          className="text-center text-white py-1"
        >
          30% off storewide — Limited time!
        </div>
        <div className="d-flex justify-content-around py-3 px-6 px-sm-1">
          <div>
            <b>
              <Link className="text-black" href="/">
                Steppas
              </Link>
            </b>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="d-lg-flex d-md-flex justify-content-around d-none"
          >
            <div className="mx-3">
              <Link className="text-black" href="/">
                Home
              </Link>
            </div>
            <div className="mx-3 text-black">
              <Link className="text-black" href="/shop">
                Shop
              </Link>
              &nbsp; <i className="fa fa-angle-down"></i>
            </div>
            <div className="mx-3">
              Product &nbsp; <i className="fa fa-angle-down"></i>
            </div>
            <div className="mx-3">
              <Link className="text-black" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="d-lg-flex d-md-flex justify-content-around d-none">
            <div className="mx-2">
              <i className="fa fa-magnifying-glass"></i>
            </div>
            <div className="mx-2">
              <i className="fa fa-shopping-bag"></i>
            </div>
            <div className="mx-2">
              <Link href={"/cart"}>
                <i className="fas text-dark fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
          <div className="d-lg-none d-md-none d-sm-flex">
            <Link href={"/cart"}>
              <i className="fa fa-shopping-cart text-dark mx-4"></i>
            </Link>
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </header>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasExampleLabel">
            STEPPAS COLLECTION
          </h2>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body canv">
          <div>
            <h4 className="mt-3">Menu</h4>
          </div>{" "}
          <br />
          <ul>
            <li>
              <h4>Home</h4>
            </li>{" "}
            <br />
            <li className="dropdown">
              <h4>Products</h4>
            </li>
            <br />
            <li>
              <h4>Collections</h4>
            </li>{" "}
            <br />
            <li>
              <h4>Shop</h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
