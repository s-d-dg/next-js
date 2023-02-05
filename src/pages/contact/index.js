import { Fragment } from "react";
import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>My Blog - Contact</title>
        <meta
          name="description"
          content="A contact form to send a message."
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
