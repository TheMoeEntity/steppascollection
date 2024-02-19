"use client";

const Header = () => {
  return (
    <>
      <header className="w-100 h-auto p-0">
        <div style={{ background: "#38CB89" }} className="text-center py-1">
          30% off storewide — Limited time!
        </div>
        <div className="d-flex justify-content-around py-3 px-6 px-sm-1">
          <div>
            <b>Steppas</b>
          </div>
          <div className="d-lg-flex d-md-flex justify-content-around d-none">
            <div className="mx-3">Home</div>
            <div className="mx-3">
              Shop &nbsp; <i className="fa fa-angle-down"></i>
            </div>
            <div className="mx-3">
              Product &nbsp; <i className="fa fa-angle-down"></i>
            </div>
            <div className="mx-3">Contact Us</div>
          </div>
          <div className="d-lg-flex d-md-flex justify-content-around d-none">
            <div className="mx-2">
              <i className="fa fa-magnifying-glass"></i>
            </div>
            <div className="mx-2">
              <i className="fa fa-shopping-bag"></i>
            </div>
            <div className="mx-2">
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
          <div
            className="d-lg-none d-md-none d-sm-block"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fa-solid fa-bars"></i>
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
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;