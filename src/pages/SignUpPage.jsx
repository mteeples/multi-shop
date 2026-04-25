import SignUpForm from "../components/Auth/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Sign Up</span>
      </h2>
      <div className="row px-xl-5">
        <SignUpForm />
      </div>
    </div>
  );
}
