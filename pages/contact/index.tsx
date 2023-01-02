import Head from "next/head";
import css from "./Contact.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactPage(props: any) {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    const formData = { email: email, message: message };
    console.log(formData);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });

    router.push("/");
  }

  return (
    <div data-scroll-section>
      <Head>
        <title>Chris Hampshire: Contact</title>
        <meta name="description" content="Chris Hampshire Contact Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div>
        <main className={css.contact}>
          <h1 className={css["contact-h1"]}>Contact</h1>
          <form onSubmit={handleSubmit}>
            <label style={{ color: "white" }}>Email Address</label>

            <label style={{ color: "white" }}>Message</label>

            <button type="submit" onClick={handleSubmit}>
              Send Message
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
