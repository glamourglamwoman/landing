import {React, useRef} from "react";
import { Footer, Navbar } from "../components";
import emailjs from 'emailjs-com';


const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kzqsrxx', 'template_ayydag5', form.current, 'lCARTy4JGy0zcDLTc')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contactanos</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div class="form my-3">
                <label for="Name">Nombre</label>
                <input
                  type="name"
                  class="form-control"
                  id="Name"
                  name="name"
                  placeholder="Introduzca su nombre"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  name="email"
                  placeholder="nombre@ejemplo.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Mensaje</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Message"
                  name="message"
                  placeholder="Ingrese su mensaje"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
