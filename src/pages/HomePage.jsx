import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleBookingClick = () => {
    navigate('/reservacion');
  };

  return (
    <>
      <title>HomePage</title>
        <div className='cabecera_hp'>
          <h1>Saborea México</h1>
        </div>
        <div className='container parrafo_cabecera_hp'>
          <p>"Descubre el auténtico sabor de nuestras tradiciones en cada bocado. Ven y disfruta de los mejores antojitos en Antojitos Mexicanos, donde la historia se sirve en tu mesa."</p>
        </div>
        <div className='container contenedor_carrusel_patillos'>
          <div className='seccion_slider_platillos'>
          <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner slider_platillos">
    <div className="carousel-item active">
      <img src="https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/7ebe8aaf6c0838d80e5c3471f97ad316.jpg" className=" " alt="Enchiladas" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn7.kiwilimon.com/recetaimagen/14881/7199.jpg" className=" " alt="Chile en Nogada" />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.nutritionstudies.org/wp-content/uploads/2023/10/red-posole-with-mushroom-1024x683.jpg" className=" " alt="Pozole" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
          <div className='frase_slider'>
            <h3>¡Descubre una explosión de sabores en Antojitos Mexicanos!</h3>
            <p>
            Sumérgete en la auténtica experiencia culinaria mexicana mientras exploras nuestro menú repleto de antojitos tradicionales. Desde las irresistibles quesadillas de flor de calabaza hasta los exquisitos tacos de cecina y longaniza, cada platillo está impregnado de la rica herencia gastronómica de México. ¡Ven y déjate seducir por el sabor de nuestras recetas centenarias en el corazón de Tlalpan!
            </p>
            </div>
        </div>
        <div className='contenedor_redireccion'>
          <div className='boton_menu' onClick={handleMenuClick}>
            <img src="https://cdn.theforkmanager.com/static/styles/blog_article_header_image/public/wp-blog/El-Tenedor-marketing-para-restaurantes-optimiza-tu-menu.jpg?itok=DbGdHYqf" className="img-fluid" alt="ver-menu"/>
            <h3>Ver Menú</h3>
          </div>
          <div className='boton_reserva' onClick={handleBookingClick}>
            <img src="https://cdn0.psicologia-online.com/es/posts/3/0/1/como_saber_si_le_gustas_a_una_persona_por_whatsapp_5103_600_square.jpg" className="img-fluid" alt="hacer-reservacion"/>
            <h3>Haz una reservación</h3>
          </div>
        </div>
        <div className='contenedor_reviews'>
          <dt>Así nos califican nuestros clientes</dt>
          <dd>⭐⭐⭐⭐⭐</dd>
          <div className='reviews_icons iconos_reviews'>
            <img src="https://companieslogo.com/img/orig/TRIP-2af5b8e6.png?t=1678518492" alt="TripAdvisor" />
            <img src="https://static.vecteezy.com/system/resources/previews/016/716/478/original/google-maps-icon-free-png.png" alt="Google Maps" />
            <img src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png" alt="Facebook" />
          </div>
        </div>
        <div className='contenedor_contacto'>
          <div>
            <img src="https://t1.uc.ltmcdn.com/es/posts/7/4/6/como_saber_si_le_gustas_a_una_chica_por_whatsapp_47647_600.jpg" alt="mujer contactando" />
          </div>
          <div className='contacto_datos'>
            <h3>Contáctanos</h3>
            <p>Si tienes dudas o aclaraciones puedes contactarnos por los siguientes medios</p>
            <h4>Tlalpan Centro</h4>
            <h4>Ciudad de México 14000</h4>
            <i class="bi bi-envelope-at-fill"> contacto@antojitosmexicanos.mx</i>
            <i class="bi bi-telephone-fill"> 5555555555</i>
          </div>
        </div>
    </>
  )
}

export default HomePage