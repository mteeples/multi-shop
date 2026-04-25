import { Form } from "react-router";

export default function SignUpForm() {
  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <Form
          name="signUpForm"
          id="signUpForm"
          noValidate={false}
          method="post"
        >
          <div className="control-group">
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              required="required"
              data-validation-required-message="Please enter your first name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              required="required"
              data-validation-required-message="Please enter your last name"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Email"
              required="required"
              data-validation-required-message="Please enter your email"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div className="control-group">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required="required"
              data-validation-required-message="Please enter a valid password"
            />
            <p className="help-block text-danger"></p>
          </div>
          <div>
            <button
              className="btn btn-primary py-2 px-4"
              type="submit"
              id="signUpButton"
            >
              Sign Up
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
