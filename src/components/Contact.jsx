import React from "react";
import Image from "next/image";
function Contact() {
  return (
    <>
      <div className="contact-div">
        <h1>Contáctame</h1>
        <div className="content">
          <div className="form">
            <form>
              <label for="name">Nombre</label>
              <br />
              <input type="text" id="name" name="name"></input>
              <br />
              <label for="email">E-Mail</label>
              <br />
              <input type="text" id="email" name="email"></input>
              <br />
              <label for="message">Mensaje</label>
              <br />
              <textarea type="text" id="message" name="message"></textarea>
              <br />
              <div className="submit-div">
                <button type="submit" className="submit-btn">
                  <div className="icon-div">
                    <Image src="/icons/blue-send.png" alt="send" fill />
                  </div>
                  <p>Enviar</p>
                </button>
              </div>
            </form>
          </div>
          <div className="contact">
            <p>Contacto: on5990@gmail.com</p>
            <p>Ubicación: Santiago, Chile</p>
            <div className="links-div">
              <div className="logo-div">
                <Image alt="LinkedIn" src="/logos/linkedin_logo.png" fill />
              </div>
              <div className="logo-div">
                <Image alt="LinkedIn" src="/logos/git_logo2.png" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
