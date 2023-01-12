import sgMail from "@sendgrid/mail";
const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);
export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      const data = req.body;
      const messageBody = `Nombre: ${data.name} \nE-Mail: ${data.email} \nMensaje: ${data.message}`;
      const htmlBody = `<h3>Nombre: ${data.name}</h3> <h3>E-Mail: ${data.email}</h3> <p>Mensaje: ${data.message}</p>`;
      const message = {
        to: ["on5990@gmail.com"],
        from: process.env.VERIFIED_SENDER,
        subject: "Contacto desde Portafolio",
        body: messageBody,
        html: htmlBody,
      };
      await sgMail.send(message);
      return res
        .status(200)
        .json({ success: true, message: "Mensaje enviado" });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error,
      });
    }
  }
}
