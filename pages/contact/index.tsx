import Head from "next/head";
import css from "./Contact.module.css";
import { Container, Form, Button } from "react-bootstrap";
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
    <>
      <Head>
        <title>Chris Hampshire: Contact</title>
        <meta name="description" content="Chris Hampshire Contact Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <main className={css.contact}>
          <h1 className={css["contact-h1"]}>Contact</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "white" }}>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "white" }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e: any) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" onClick={handleSubmit}>
              Send Message
            </Button>
          </Form>
        </main>
      </Container>
    </>
  );
}
