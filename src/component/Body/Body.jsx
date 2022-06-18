import React from "react";

function Body() {
  return (
    <div className="">
      <div className="row border-top border-bottom py-5">
        <div className="col-12 col-md-5">
          <div className="cardleft-header">
            <h3>Payment Information</h3>
            <p className="text-gray">Choose your method of payment</p>
          </div>

          <div className="cardleft-body">
            <div className="card py-4 px-5 shadow">
              <p className="mb-2">CARD NUMBER</p>

              <p className="letter-space mb-3">4324 5433 9382 1030</p>

              <div className="mb-3 cardimgxx">
                <div className="card-imglayer"></div>
                <img src="/images/cardxx.png" alt="" width="100%" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z" />
                </svg>
              </div>

              <p className="mb-2">EXPIRATION DATE</p>

              <p className="mb-2">03/24</p>

              <div className="d-flex justify-content-between">
                {" "}
                <p>John Doe</p>
                <div className="masterlogo d-flex">
                  <i className="mastercard-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-6">
          <div className="d-flex justify-content-end py-2 mb-4">
            <ul className="list-unstyled d-flex justify-content-between gap-4">
              <li>
                <img src="/images/visa.png" alt="" />
              </li>
              <li>
                <img src="/images/discover.png" alt="" />
              </li>
              <li className="me-3">
                <img src="/images/dot.png" alt="" />
              </li>
              <li>
                <img src="/images/paypal.png" alt="" />
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <label htmlFor="">Credit card number</label>
              <input
                type="text"
                className="w-100"
                placeholder="4324  5433  9382  1030"
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="">Expiration date</label>
              <input type="text" className="w-100" placeholder="03/24" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-6">
              <label htmlFor="">Security code</label>
              <input type="text" className="w-100" placeholder="420" />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="">Postal code</label>
              <input type="text" className="w-100" placeholder="10119" />
            </div>
          </div>
          <div className="d-flex align-items-center mt-3">
            <input type="checkbox" className="checkbox-round" />
            <p className="m-0 mx-3  ">Use this card for next time purchase</p>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <button type="submit" className="w-100 p-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-bottom">
        <div className="d-flex justify-content-between mt-5">
          <strong>Subtotal</strong>
          <strong>₦2,3497.00</strong>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <strong>Estimated Tax</strong>
          <strong>₦119.64</strong>
        </div>
        <div className="d-flex justify-content-between mt-3 mb-5">
          <div className="">
            <strong>Promotional Code:</strong>
            <span className="text-gray"> Z4KXLM9A</span>
          </div>
          <strong>-₦60.00</strong>
        </div>
      </div>

      <div className="mb-5">
        <div className="d-flex justify-content-between mt-3">
          <button type="submit" className="w-25 p-2">
            Submit
          </button>

          <h3>
            <strong> TOTAL:₦2556.64</strong>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Body;
