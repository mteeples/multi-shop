import { Form } from "react-router";
import AddressFormGroup from "./AddressFormGroup";
import CheckoutOrderSummary from "./CheckoutOrderSummary";

export default function CheckoutForm() {
  // Note: I removed the create an account checkbox, since the user should be logged in already to checkout
  return (
    <Form method="post">
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Billing Address</span>
            </h5>
            <AddressFormGroup fieldPrefix="billing">
              <div className="col-md-12">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="shipto"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="shipto"
                    data-toggle="collapse"
                    data-target="#shipping-address"
                  >
                    Ship to different address
                  </label>
                </div>
              </div>
            </AddressFormGroup>
            <div className="collapse mb-5" id="shipping-address">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Shipping Address</span>
              </h5>
              <AddressFormGroup fieldPrefix="shipping" />
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Order Total</span>
            </h5>
            <CheckoutOrderSummary />
            <div className="mb-5">
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Payment</span>
              </h5>
              <div className="bg-light p-30">
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="paypal"
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="directcheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="directcheck"
                    >
                      Direct Check
                    </label>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="payment"
                      id="banktransfer"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="banktransfer"
                    >
                      Bank Transfer
                    </label>
                  </div>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold py-3">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
