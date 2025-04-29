import { useEffect, useState } from "react";
import "./payment.css";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AdSenseUnit from "../AdSenseUnit";

/**
 * Payment Component
 * 
 * This component manages the payment options and checkout flow.
 * It displays payment methods, handles order data from previous steps,
 * and prepares the redirect to the payment gateway.
 * 
 * Key Features:
 * - Displays payment options (PhonePe)
 * - Shows order summary and details
 * - Manages state for customer details and order information
 * - Handles the payment initiation process
 */
const Payment = () => {
  // Get location object to access state passed from previous page
  const location = useLocation();
  
  // State to store customer information and order details
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    productName: "",
    quantity: "",
    price: "",
  });

  /**
   * Initialize customer information from location state when component mounts
   * This data is passed from the previous checkout step
   */
  useEffect(() => {
    // Check if location contains state data and update customer information
    if (location.state) {
      const {
        name,
        mobile,
        email,
        address,
        city,
        pincode,
        state,
        productName,
        quantity,
        price,
      } = location.state;

      // Update state with customer and order information
      setCustomerInfo({
        name,
        mobile,
        email,
        address,
        city,
        pincode,
        state,
        productName,
        quantity,
        price,
      });
    }
  }, [location]);

  /**
   * Handle payment initiation for PhonePe
   * Constructs URL with required parameters and redirects to payment processing
   */
  const handlePayment = () => {
    // Calculate the final amount (based on price and quantity)
    const amount = customerInfo.price * customerInfo.quantity;
    const domain = window.location.hostname;
    // Generate a unique merchantOrderId
    const merchantOrderId = `MUID-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

    // Use the REACT_APP_PAYMENT_API environment variable
    let apiEndpoint = process.env.REACT_APP_PAYMENT_API;
    
    // Add appropriate protocol
    const protocol = apiEndpoint.includes('localhost') ? 'http' : 'https';
    
    // Remove any trailing slash if present
    apiEndpoint = apiEndpoint.replace(/\/$/, '');
    
    // Construct the payment URL
    const paymentUrl = `${protocol}://${apiEndpoint}/api/phonepay/process-payment?domain=${domain}&amount=${amount}&merchantOrderId=${merchantOrderId}`;
    
    // Use window.location.href instead of window.open for consistent behavior
    window.location.href = paymentUrl;
  };

  // Render payment options and order details
  return (
    <Container>
      {/* Ad unit for monetization */}
      <AdSenseUnit />
      
      <div className="payment-option-wrapper">
        <div className="payment-option">
          <h3>Select Payment Method</h3>
          
          {/* Payment method selection - Currently only PhonePe */}
          <div className="payment-option-inner">
            {/* PhonePe payment option */}
            <div className="checkbox-wrapper">
              <div className="checkbox">
                {/* Default checked as it's the only option */}
                <input type="radio" name="payment" value="PhonePe" defaultChecked />
                <label>UPI - PhonePe (Recommended)</label>
              </div>
              <div className="image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/270/270799.png"
                  alt="PhonePe"
                />
              </div>
            </div>
            
            {/* Payment button that initiates the payment process */}
            <div className="payment-btn">
              <button onClick={handlePayment}>Pay Now ₹ {customerInfo.price * customerInfo.quantity}</button>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="payment-summery">
          <h3>Order Summary</h3>
          <div className="payment-summery-inner">
            {/* Display product and pricing details */}
            <div className="price-text">
              <p>
                {customerInfo.productName} ({customerInfo.quantity} Qty.)
              </p>
              <p>₹ {customerInfo.price * customerInfo.quantity}</p>
            </div>
            <div className="price-text">
              <p>Delivery</p>
              <p>₹ 0</p>
            </div>
            <div className="price-text border-top">
              <h5>Total</h5>
              <h5>₹ {customerInfo.price * customerInfo.quantity}</h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Payment;
