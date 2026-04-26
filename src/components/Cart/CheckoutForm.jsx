import { Form, useActionData } from "react-router";
import AddressFormGroup from "./AddressFormGroup";
import CheckoutOrderSummary from "./CheckoutOrderSummary";
import myAxios from "../../utils/db";
import { useState } from "react";

export default function CheckoutForm() {
  const actionData = useActionData();

  const [shippingRequired, setShippingRequired] = useState(false);
  const toggleShippingForm = () => setShippingRequired((req) => !req);

  // Note: I removed the create an account checkbox, since the user should be logged in already to checkout
  return (
    <Form method="post">
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Billing Address</span>
            </h5>
            <AddressFormGroup fieldPrefix="billing" required={true}>
              <div className="col-md-12">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="shipto"
                    onChange={toggleShippingForm}
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
              <AddressFormGroup
                fieldPrefix="shipping"
                required={shippingRequired}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Order Total</span>
            </h5>
            <CheckoutOrderSummary actionData={actionData} />
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
                      required
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

const action = async ({ params, request }) => {
  // I couldn't get another way to work, so I am just going to pull the extra data from local/session storage
  const formData = await request.formData();

  // billingInfo
  const billingInfo = {
    firstName: formData.get("billingFirstName"),
    lastName: formData.get("billingLastName"),
    email: formData.get("billingEmail"),
    phoneNumber: formData.get("billingPhoneNumber"),
    addressLine1: formData.get("billingAddressLine1"),
    addressLine2: formData.get("billingAddressLine2"),
    country: formData.get("billingCountry"),
    city: formData.get("billingCity"),
    state: formData.get("billingState"),
    zipCode: formData.get("billingZipCode"),
  };
  // shippingInfo
  const shippingInfo =
    formData.get("shippingFirstName") === ""
      ? { ...billingInfo }
      : {
          firstName: formData.get("shippingFirstName"),
          lastName: formData.get("shippingLastName"),
          email: formData.get("shippingEmail"),
          phoneNumber: formData.get("shippingPhoneNumber"),
          addressLine1: formData.get("shippingAddressLine1"),
          addressLine2: formData.get("shippingAddressLine2"),
          country: formData.get("shippingCountry"),
          city: formData.get("shippingCity"),
          state: formData.get("shippingState"),
          zipCode: formData.get("shippingZipCode"),
        };

  try {
    // userId
    const { localId } = JSON.parse(localStorage.getItem("userData"));

    // Items
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
    // Duplicate logic from my hook
    const subtotal = cartItems.reduce(
      (total, current) => total + current.price * current.quantity,
      0,
    );
    const shipping = subtotal * 0.1;
    const total = subtotal + shipping;

    // Build full data packet
    const data = {
      userId: localId,
      billingInfo,
      shippingInfo,
      items: cartItems,
      subtotal,
      shipping,
      total,
      orderDate: new Date(),
      orderStatus: "pending",
    };

    // Post to endpoint and return response data
    const response = await myAxios.post("/orders.json", data);
    return response.data;
  } catch (err) {
    return { error: err.toString() };
  }
};

export { action };
