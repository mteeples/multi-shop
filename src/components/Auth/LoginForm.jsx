import { Form } from "react-router";

export default function LoginForm() {
  return (
    <div className="col-lg-7 mb-5">
      <div className="contact-form bg-light p-30">
        <Form name="loginForm" id="loginForm" noValidate={false} method="post">
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
              id="loginButton"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
