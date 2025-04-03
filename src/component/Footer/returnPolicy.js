import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const ReturnPolicy = () => {
  return (
    <Container id="main" role="main">
      <div className="shopify-policy__container">
        <div className="shopify-policy__title">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Return Policy</h1>

     <p className="mb-4">
             All exchanges ,returned and damaged product will be re delivered within <strong>3 days </strong> 
            from the days you have raised a request . 
            We will check the authenticity of the request and take action according to approve or reject the request.
            </p>
           
            <h2 className="text-xl font-semibold mb-2">
              Eligibility for a Return:
            </h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                Your item must be in the damaged condition that you received it,
                unused, with tags, and in its original packaging.
              </li>
              <li>You’ll also need the receipt or proof of purchase.</li>
              <li>
                <strong>Unboxing video is a must</strong> to request a
                replacement.
              </li>
            </ul>
            <p className="mb-4">
              To start a return, you can contact us at:{" "}
              <strong>support@{window.location.hostname}</strong>
            </p>
            <h2 className="text-xl font-semibold mb-2">Return Address:</h2>
            <address className="mb-4 not-italic">
              {process.env.REACT_APP_ADDRESS}
            </address>
            <p className="mb-4">
              If your return is accepted, we’ll send you a return shipping
              label, as well as instructions on how and where to send your
              package. Items sent back to us without first requesting a return
              will not be accepted.
            </p>
            <h2 className="text-xl font-semibold mb-2">Damages and Issues:</h2>
            <p className="mb-4">
              Please inspect your order upon reception and contact us
              immediately if the item is defective, damaged, or if you receive
              the wrong item so that we can evaluate the issue and make it
              right.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              Exceptions / Non-returnable Items:
            </h2>
            <p className="mb-4">
              Certain types of items cannot be returned, such as bulk orders or
              offer/discount products.
            </p>
            <h2 className="text-xl font-semibold mb-2">Exchanges:</h2>
            <p className="mb-4">
              The fastest way to ensure you get what you want is to return the
              item you have. Once the return is accepted, make a separate
              purchase for the new item.
            </p>

            <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
            <p className="mb-4">
             Once the refund is approved. Amount will be credited to your account/original payment method  within 7-10 days.
            </p>
            <p className="mb-4">
              Please remember it can take some time for your bank or credit card
              company to process and post the refund.
            </p>
            <p>
             All exchanges ,returned and damaged product will be re delivered within 3 days  from the days you have raised a request . 
We will check the authenticity of the request and take action according to approve or reject the request.
              <strong>support@{window.location.hostname}</strong>
            </p>
          </div>

          <Form
            method="post"
            action="/contact#footer-newsletter"
            id="footer-newsletter"
            acceptCharset="UTF-8"
            className="my-3"
          >
            <input type="hidden" name="form_type" value="customer" />
            <input type="hidden" name="utf8" value="✓" />
            <input type="hidden" name="contact[tags]" value="newsletter" />
            <Form.Control
              size="lg"
              type="email"
              placeholder="Enter email"
              className="mb-3"
            />
            <Button
              type="submit"
              variant="dark"
              className="mt-3"
              style={{
                background: "var(--them-color)",
                borderColor: "var(--them-color)",
              }}
            >
              Subscribe
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ReturnPolicy;
