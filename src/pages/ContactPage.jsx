import ContactForm from "../components/Contact/ContactForm";
import Location from "../components/Contact/Location";

export default function ContactPage() {
  return (
    <div className="container-fluid">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Contact Us</span>
      </h2>
      <div className="row px-xl-5">
        <ContactForm />
        <Location />
      </div>
    </div>
  );
}
