import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../component/Header";
import Home from "../component/Home";
import SingleProduct from "../component/SingleProduct";
import { AuthContext } from "../contexts/AuthContext";
import Cart from "../component/Cart";
import Checkout from "../component/Checkout";
import Wishlist from "../component/Wishlist";
import ScrollToTop from "./ScrollToTop";
import Footer from "../component/Footer";
import ReturnPolicy from "../component/Footer/returnPolicy";
import FAQ from "../component/Footer/faq";
import CategoryPage from "../component/Category";
import OrderTracking from "../component/Footer/orderTracking";
import ContactUs from "../component/Footer/contactUs";
import MyAccount from "../component/Footer/myAccount";
import ThankYou from "../component/Thank-You/ThankYou";
import PrivacyPolicy from "../component/Footer/privacyPolicy";
import Termsofservice from "../component/Footer/Termsofservice";
import Shippingpolicy from "../component/Footer/Shippingpolicy";
import Aboutus from "../component/Footer/aboutUs";
import Success from "../component/Success/Success";
import Failure from "../component/Failure/Failure";

const AppRouters = () => {
  // Remove the MultiPayment path check since we're removing that route
  const isMultiPayment = false;

  return (
    <Router>
      <ScrollToTop />
      <AuthContext>
        {!isMultiPayment && <Header />}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/single-product/:id" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/category/:id" exact element={<CategoryPage />} />
          <Route path="/checkout/address" exact element={<Checkout />} />
          <Route path="/wishlist" exact element={<Wishlist />} />
          <Route path="/refund-policy" exact element={<ReturnPolicy />} />
          <Route path="/faqs" exact element={<FAQ />} />
          <Route path="/order-tracking" exact element={<OrderTracking />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/privacypolicy" exact element={<PrivacyPolicy />} />
          <Route path="/termsofservice" exact element={<Termsofservice />} />
          <Route path="/about-us" exact element={<Aboutus />} />
          <Route path="/shippingpolicy" exact element={<Shippingpolicy />} />
          <Route path="/profile" exact element={<MyAccount />} />
          <Route path="/thankyou" exact element={<ThankYou />} />
          <Route path="/Failure" exact element={<Failure />} />
          <Route path="/Success" exact element={<Success />} />
          <Route
            path="/order-comfirmation"
            exact
            element={<OrderTracking isAfterPayment />}
          />
        </Routes>
        {!isMultiPayment && <Footer />}
      </AuthContext>
    </Router>
  );
};

export default AppRouters;
