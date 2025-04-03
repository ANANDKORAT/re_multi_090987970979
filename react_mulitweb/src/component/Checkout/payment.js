import { useEffect, useRef, useState } from "react";
import "./index.css";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

const Payment = () => {
  const {
    selectedProduct,
    totalPrice,
    totalDiscount,
    totalMRP,
    totalExtraDiscount,
    isPaymentPageLoading,
    setIsPaymentPageLoading,
  } = useAuth();

  const navigate = useNavigate();
  const ref = useRef(null);

  const location = useLocation();
  const userData = location.state.initialValues;

  const [loading, setLoading] = useState(false);

  const payNow = async () => { 
    window.location.href =(`${process.env.REACT_APP_PHONEPE_GETWAY_URL}/multipayment?amount=${totalPrice}&address=${userData.fullname}&mobileno=${userData.mobile}&domainname=${window.location.hostname}`); 
    
  };

  localStorage.setItem("totalPrice", totalPrice);

  return isPaymentPageLoading ? (
    <Container
      className="p-0 pt-3 pb-3 flex-column position-relative d-flex justify-content-center align-items-center"
      style={{ background: "#f2f2f3", height: "250px" }}
    >
      <div>Please Wait...</div>
      <Spinner />
    </Container>
  ) : (
    <>
     
      <Container
        className="p-0 pt-3 pb-3 position-relative d-flex flex-column justify-content-between"
        style={{ background: "#f2f2f3" }}
      >
        <div>
          <div className="mt-3">
            {selectedProduct?.length && (
              <div className="bg-white px-4 py-4">
                <h6
                  id="product_details"
                  className="card-title text-start fw-bold border-bottom pb-2"
                >{`PRICE DETAILS (${
                  selectedProduct?.length === 1
                    ? "1 Item"
                    : `${selectedProduct?.length} Items`
                })`}</h6>
                <div className="mt-3">
                  <div className="d-flex flex-row justify-content-between align-items-center ">
                    <span>Total MRP</span>
                    <span className="ms-2">
                      <span>
                        <span className="">₹</span>
                        {totalMRP}
                      </span>
                    </span>
                  </div>
                  {totalDiscount ? (
                    <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                      <span>Discount on MRP</span>
                      <span className="ms-2 text-success">
                        <span>
                          - <span className="">₹</span>
                          {totalDiscount}
                        </span>
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {totalExtraDiscount &&
                  process.env.REACT_APP_COUPON_APPLY == "true" ? (
                    <>
                      <div className="d-flex flex-row justify-content-between align-items-center mt-2 border-top pt-2">
                        <span>Total Price</span>
                        <span className="ms-2">
                          <span>
                            <span className="">₹</span>
                            {totalMRP - totalDiscount}
                          </span>
                        </span>
                      </div>
                      <div className="d-flex flex-row justify-content-between align-items-center mt-2 ">
                        <span>Coupon Applied (Buy 2 Get 1 free)</span>
                        <span className="ms-2 text-success">
                          <span>
                            -<span className="">₹</span>
                            {totalExtraDiscount}
                          </span>
                        </span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  <div className="d-flex flex-row justify-content-between align-items-center mt-2 fw-bold border-top pt-3">
                    <span>Total Amount</span>
                    <span className="ms-2">
                      <span>
                        <span className="">₹</span>
                        {totalPrice}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="position-sticky bottom-0 pb-3 bg-white px-4 mt-3 py-4 d-flex align-content-center justify-content-between"
          id="payment_bottom_block"
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "16px",
              fontWeight: 700,
              color: "#282c3f",
              textAlign: "start",
            }}
          >
            <h6
              className="mb-0"
              style={{ fontWeight: "bold", fontSize: "22px" }}
            >
              ₹{totalPrice}
            </h6>
            <a
              href="#product_details"
              style={{
                fontSize: "12px",
                textDecoration: "none",
                color: "#ff3f6c",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              VIEW DETAILS
            </a>
          </div>
          <Button
            className="d-flex justify-content-center align-items-center"
            variant="dark"
            style={{
              width: "60%",
              padding: "10px",
              background: "var(--them-color)",
              borderColor: "var(--them-color)",
            }}
            onClick={() => payNow()}
          >
            PAY NOW
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Payment;
