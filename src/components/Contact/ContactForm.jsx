import { Form } from "react-router";

export default function ContactForm() {
  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <div id="success"></div>
        <Form name="sentMessage" id="contactForm" noValidate={false}>
          <div className="control-group">
            <input
              type="text"
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
