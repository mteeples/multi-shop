import { Form, useActionData } from "react-router";

export default function LoginForm() {
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
          {actionData && actionData.email && <strong>Login successful!</strong>}
        </div>
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
