import sgMail from "@sendgrid/mail";

const sendMail = (req: any, res: any) => {
  const body = JSON.parse(req.body);

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
  const msg = {
    to: "chris@recoverworld.com", // Change to your recipient
    from: "hello@carlwicker.co.uk", // Change to your verified sender
    subject: `New Email from Chris Hampshire Website form.`,
    text: `FROM: ${body.email} \r\n MESSAGE: ${body.message}`,
    html: `<b>FROM:</b> ${body.email} <br> <b>MESSAGE:</b> ${body.message}`,
  };
  sgMail.send(msg).then(() => {
    console.log("Email sent");
  });

  res.status(200).json({ status: "Ok" });
};

export default sendMail;
