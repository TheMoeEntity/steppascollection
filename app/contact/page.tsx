import dynamic from "next/dynamic";
// const ContactPage = dynamic(import("../../components/ContactPage"));
import ContactPage from "../../components/ContactPage";

const Contact = () => {
  return <ContactPage />;
};

export default Contact;
