import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Sobre nosotros</h1>
        <hr />
        <p className="lead text-center">
        ¡Bienvenidos a Glamour Glam Woman! Somos una empresa líder en el mundo de la belleza y ofrecemos cursos online para que aprendas a maquillar tus ojos, labios, uñas y cualquier otra parte de tu cuerpo de manera profesional. Nuestros cursos son impartidos por los mejores maquilladores y estilistas del mundo y están diseñados para adaptarse a tu ritmo y horario. ¡No esperes más y únete a nuestra comunidad de belleza hoy mismo! Estamos seguros de que con nuestros cursos podrás mejorar tu imagen y sentirte más segura y atractiva que nunca. ¡Te esperamos!
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage