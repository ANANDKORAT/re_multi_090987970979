import { useEffect, useState } from "react";
import "./index.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const MultiPayment = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    payNow();
    console.log("payNow function calling");
  }, [searchParams]);

  const payNow = async () => {
    const data = {
      name: searchParams.get("name"),
      mobileNumber: searchParams.get("mobileno"),
      amount: searchParams.get("amount"),
      domainname: window.location.hostname,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_PHONEPE_NODE_URL}/api/phonepay/create-order`,
        data
      );

      if (res.data?.data?.instrumentResponse?.redirectInfo?.url) {
        window.open(res.data.data.instrumentResponse.redirectInfo.url, "_self");
      }
    } catch (error) {
      console.error("Error in payment:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Spinner />
          <div>Please wait</div>
        </div>
      )}
    </>
  );
};

export default MultiPayment;
