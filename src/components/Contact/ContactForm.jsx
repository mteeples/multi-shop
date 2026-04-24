import { Form, useActionData } from "react-router";
import myAxios from "../../utils/db";

export default function ContactForm() {
  const actionData = useActionData();

  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <div
          id="success"
          className={
            actionData && actionData.error
              ? "alert alert-danger"
              : actionData
                ? "alert alert-success"
                : undefined
          }
        >
          {actionData && actionData.error && (
            <>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                &times;
              </button>
              <strong>{actionData.error}</strong>
            </>
          )}
          {actionData && actionData.name && (
            <strong>Message sent! Message ID: {`${actionData.name}`}</strong>
          )}
        </div>
        <Form
          name="sentMessage"
          id="contactForm"
          noValidate={false}
          method="post"
        >
          <div className="control-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required="required"
              data-validation-required-message="Please enter your name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              required="required"
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              name="subject"
              className="form-control"
              id="subject"
              placeholder="Subject"
              required="required"
              data-validation-required-message="Please enter a subject"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <textarea
              className="form-control"
              rows="8"
              id="message"
              name="message"
              placeholder="Message"
              required="required"
              data-validation-required-message="Please enter your message"
            ></textarea>
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button
              className="btn btn-primary py-2 px-4"
              type="submit"
              id="sendMessageButton"
            >
              Send Message
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

async function action({ params, request }) {
  const formData = await request.formData();

  const body = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const response = await myAxios.post("contacts.json", body);
    return response.data;
  } catch (err) {
    return { error: err.toString() };
  }
}

export { action };
