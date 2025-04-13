// Import necessary modules and components
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  // Initialize navigation and context hooks
  const navigate = useNavigate();
  const { handleSetCartProducts, totalPrice } = useAuth();
  const location = useLocation();

  // Extract transaction ID from the URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const txnId = queryParams.get("txnId");

  // Clear cart products on component mount
  useEffect(() => {
    handleSetCartProducts([]);
  }, []);

  // Retrieve total amount from local storage
  const totalAmount = localStorage.getItem("totalPrice");

  return (
    <div>
      {/* Facebook Pixel tracking script */}
      {process.env.REACT_APP_FBPIXEL && txnId !== null && (
        <Helmet>
          <script>
            {`
            // Facebook Pixel initialization and tracking
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.REACT_APP_FBPIXEL}');
            fbq('track', 'Purchase', {
                value: '${totalAmount}',
                currency: 'INR',
                contents: [
                    {
                        id: '${txnId}',
                    }
                ],
                content_type: 'product'
            });
            fbq('track', 'PageView');
            `}
          </script>
        </Helmet>
      )}

      {/* Google Ads conversion tracking script */}
      {process.env.REACT_APP_AW && (
        <Helmet>
          <script>
            {`
            // Google Ads conversion tracking
            gtag('event', 'conversion', {
              'send_to': '${process.env.REACT_APP_AW}/${process.env.REACT_APP_PURCHASETAGGOOGLE || ""}',
              'value': ${totalAmount},
              'currency': 'INR',
              'transaction_id': '${txnId}'
            });
            `}
          </script>
        </Helmet>
      )}

      {/* Order confirmation message */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px 20px",
        }}
      >
        <h4>YOUR ORDER HAS BEEN RECEIVED</h4>
        <h5>Confirmation of Order Receipt and Payment Processing</h5>
        <p style={{ color: "red" }}>
          {/* Warning about unsuccessful payments */}
          Please note that if your payment is unsuccessful, your order will be
          automatically canceled. Kindly ensure that you do not close any UPI
          app until the payment process is completed.
        </p>
        <h6>
          {/* Information about order confirmation email */}
          Upon successful processing, you will receive an order confirmation
          email containing detailed information about your order and a link to
          track its progress.
        </h6>
        <h6>
          {/* Thank you message */}
          {`Thank you for choosing ${window.location.hostname || ""}. If you have any questions or concerns, feel free to reach out to us.`}
        </h6>
        <p>
          {/* Display transaction ID */}
          <strong>Your transaction id is:</strong>
          &nbsp;{txnId}
        </p>
        {/* Display total amount */}
        <strong>Your Amount is:</strong>
        &nbsp;{totalAmount}
      </div>

      {/* Button to navigate back to the home page */}
      <Button
        variant="dark"
        className="btn my-3 primary d-flex m-auto justify-content-center align-items-center ripple animated"
        style={{
          padding: "10px 20px",
          background: "var(--them-color)",
          borderColor: "var(--them-color)",
        }}
        onClick={(e) => {
          // Add animation class on click
          e?.target?.classList?.add("bounceIn");
          navigate(`/`);
          setTimeout(() => {
            // Remove animation class after 1 second
            if (e?.target?.classList?.contains("bounceIn"))
              e?.target?.classList?.remove("bounceIn");
          }, 1000);
        }}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default ThankYou;
