import React, { useEffect, useState } from "react";
import Image from "next/image";
function Contact({ refProp }) {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    messageErr: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  function isValidEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
    if (errMessage) {
      setTimeout(() => {
        setErrMessage(false);
      }, 5000);
    }
  }, [showMessage, errMessage]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const trName = data.name.trim();
    const trEmail = data.email.trim();
    const trMessage = data.message.trim();
    let pass = true;
    if (trName === "") {
      pass = false;
      setErrors((prev) => {
        return { ...prev, nameErr: "Este campo es requerido" };
      });
    }
    if (trEmail === "") {
      pass = false;
      setErrors((prev) => {
        return { ...prev, emailErr: "Este campo es requerido" };
      });
    } else if (!isValidEmail(trEmail)) {
      pass = false;
      setErrors((prev) => {
        return { ...prev, emailErr: "Este e-mail no es válido" };
      });
    }
    if (trMessage === "") {
      pass = false;
      setErrors((prev) => {
        return { ...prev, messageErr: "Este campo es requerido" };
      });
    }
    if (pass) {
      const submitData = async () => {
        setShowMessage(true);
      };
      submitData();
    }
  };
  return (
    <>
      <div className="contact-div" ref={refProp}>
        <h1>Contáctame</h1>
        <div className="content">
          <div className="form">
            <form>
              <label for="name">Nombre</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                  if (e.target.value !== "") {
                    setErrors((prev) => {
                      return { ...prev, nameErr: "" };
                    });
                  }
                }}
              ></input>
              <p className="error">{errors.nameErr}</p>
              <br />
              <label for="email">E-Mail</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, email: e.target.value };
                  });
                  if (e.target.value !== "") {
                    setErrors((prev) => {
                      return { ...prev, emailErr: "" };
                    });
                  }
                }}
              ></input>
              <p className="error">{errors.emailErr}</p>
              <br />
              <label for="message">Mensaje</label>
              <br />
              <textarea
                type="text"
                id="message"
                name="message"
                value={data.message}
                onChange={(e) => {
                  setData((prev) => {
                    return { ...prev, message: e.target.value };
                  });
                  if (e.target.value !== "") {
                    setErrors((prev) => {
                      return { ...prev, messageErr: "" };
                    });
                  }
                }}
              ></textarea>
              <br />
              <p className="error">{errors.messageErr}</p>
              {showMessage && (
                <p className="success-msg">
                  El mensaje fue enviado exitosamente
                </p>
              )}
              {errMessage && (
                <p className="fail-msg">Ocurrió un error, intente más tarde</p>
              )}
              <div className="submit-div">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="submit-btn"
                >
                  <div className="icon-div">
                    <Image src="/icons/blue-send.png" alt="send" fill />
                  </div>
                  <p>Enviar</p>
                </button>
              </div>
            </form>
          </div>
          <ContactInfo />
        </div>
      </div>
    </>
  );
}

function ContactInfo() {
  return (
    <>
      <div className="contact">
        <p>Contacto: on5990@gmail.com</p>
        <p>Ubicación: Santiago, Chile</p>
        <div className="links-div">
          <a href="https://github.com/on5990" target="_blank">
            <div className="logo-div">
              <Image alt="LinkedIn" src="/logos/linkedin_logo.png" fill />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-enrique-navarro-mondaca-bb6014257/"
            target="_blank"
          >
            <div className="logo-div">
              <Image alt="LinkedIn" src="/logos/git_logo2.png" fill />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Contact;
