import { redirect } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/menu");

  };

  return (
    <>
        <title>Página de nosotros</title>
        <div className="container">
        <div className="contenedor_nosotros1">
          <h1>Nosotros</h1>
          <p>Antojitos Mexicanos es un restaurante tradicional de comida mexicana ubicado en la Alcaldía Tlalpan, Ciudad de México. Fundado hace un siglo, este establecimiento ha mantenido sus raíces culinarias, ofreciendo una amplia variedad de platillos típicos mexicanos preparados con recetas auténticas que han pasado de generación en generación.</p>
        </div>
        <div className="contenedor_parrafo2">
          <img src="https://fastly.4sqi.net/img/general/600x600/12359176_iLTRC6u1FtrSxQhYqtzpKz-esx-RiUksMr9rtAWvnLk.jpg" alt="" />
          <p>El restaurante está situado en Avenida San Fernando 520, Local B, Barrio La Fama, Tlalpan Centro I, 14000 Ciudad de México, y es conocido por su atmósfera cálida y acogedora, que evoca el sabor y la cultura de México en cada uno de sus platillos. La ubicación y el ambiente familiar lo convierten en un lugar popular tanto para locales como para turistas.</p>
        </div>
        <div className="contenedor_parrafo3">
          <div>
            <h3>Historia y Tradición:</h3>
            <p>Antojitos Mexicanos ha sido un pilar en la comunidad de Tlalpan desde su fundación. A lo largo de los años, ha conservado la autenticidad de sus platillos, utilizando ingredientes frescos y métodos de cocina tradicionales. El restaurante se ha ganado una reputación por su compromiso con la calidad y el sabor, manteniendo viva la herencia gastronómica mexicana.</p>
          </div>
          <img src="https://fastly.4sqi.net/img/general/600x600/45852946_LWxn2w8bl2FkLI4YUKezb9gh5stqh-hjZzwgoYh3wwU.jpg" alt="" />
        </div>
        <div className="contenedor_parrafo4">
          <img src="https://fastly.4sqi.net/img/general/600x600/8753894_s1JGnwJuvX6xdvlO9nK0bwSjdwyh_JD0-sMwpmvuMOA.jpg" alt="" />
          <div>
            <h3>Platillos Destacados:</h3>
            <p>El menú de Antojitos Mexicanos incluye una variedad de antojitos como tacos, quesadillas, sopes, gorditas y más. Cada platillo es preparado con cuidado, asegurando una experiencia culinaria que honra las raíces mexicanas. Entre los platillos más destacados se encuentran las quesadillas de flor de calabaza, huitlacoche y champiñones, así como los tacos de cecina y longaniza, todos preparados con tortillas de maíz azul hechas a mano.</p>
          </div>
        </div>
        <div className="contenedor_vermenu_aboutus">
          <h3>Conoce nuestro Menú</h3>
          <button type="button" class="btn btn-light" onClick={handleRedirect}>Vamos</button>
        </div> 
        </div>
    </>
  )
}

export default Aboutus