import Head from "next/head";
import css from "./Contact.module.css";
import { Container } from "react-bootstrap";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Chris Hampshire: Contact</title>
        <meta name="description" content="Chris Hampshire Contact Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <main className={css.contact}>
          <h1 className={css["contact-h1"]}>Contact</h1>
        </main>
      </Container>
    </>
  );
}
