import React from "react";
import CheckOutForm from "../components/checkout/CheckOutForm";

function Checkout(props) {
  return (
    <>
      <>
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <a className="breadcrumb-item text-dark" href="#">
                  Home
                </a>
                <a className="breadcrumb-item text-dark" href="#">
                  Shop
                </a>
                <span className="breadcrumb-item active">Checkout</span>
              </nav>
            </div>
          </div>
        </div>
        <CheckOutForm />
      </>
    </>
  );
}

export default Checkout;
