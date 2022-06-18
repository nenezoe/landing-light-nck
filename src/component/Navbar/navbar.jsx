import React, { useState } from "react";

function Navbar() {
  const [dropdownState, setdropdownState] = useState(false);
  return (
    <div className="d-flex justify-content-end p-5 align-items-center">
      <ul
        className={`d-block d-md-flex justify-content-between m-0 list-unstyled gap-3 align-items-center  header ${
          dropdownState ? "d-block " : " d-none d-md-flex"
        }`}
      >
        <li className=" m-3 m-md-0 mx-3">
          <a href="#">
            <h5>
              <strong> TRIPS </strong>
            </h5>
          </a>
        </li>
        <li className="m-3 m-md-0 mx-3">
          <a href="#">
            <h5>
              <strong>RECENTLY VIEWED</strong>
            </h5>
          </a>
        </li>
        <li className="m-3 m-md-0 mx-3">
          <a href="#">
            <h5>
              <strong>BOOKINGS</strong>
            </h5>
          </a>
        </li>
      </ul>
      <div className="d-md-none">
        {!dropdownState ? (
          <svg
            onClick={() => {
              setdropdownState(true);
            }}
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
          </svg>
        ) : (
          <svg
            onClick={() => {
              setdropdownState(false);
            }}
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
          </svg>
        )}
      </div>
      <div className="m-1 mx-2 hero-img">
        <img src="/images/img.png" alt="" width="100%" />
      </div>
    </div>
  );
}

export default Navbar;