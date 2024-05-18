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
      <img src="public/img/slider/enchiladas.png" className=" " alt="Enchiladas" />
    </div>
    <div className="carousel-item">
      <img src="public/img/slider/chile_en_nogada_comida_mexicana.png" className=" " alt="Chile en Nogada" />
    </div>
    <div className="carousel-item">
      <img src="public/img/slider/pozole.png" className=" " alt="Pozole" />
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
            <img src="/public/img/other/ver-menu.png" className="img-fluid" alt="ver-menu"/>
            <h3>Ver Menú</h3>
          </div>
          <div className='boton_reserva' onClick={handleBookingClick}>
            <img src="/public/img/other/mujer-reservacion.png" className="img-fluid" alt="hacer-reservacion"/>
            <h3>Haz una reservación</h3>
          </div>
        </div>
        <div className='contenedor_reviews'>
          <dt>Así nos califican nuestros clientes</dt>
          <dd>⭐⭐⭐⭐⭐</dd>
          <div className='reviews_icons'>
            <img src="https://companieslogo.com/img/orig/TRIP-2af5b8e6.png?t=1678518492" alt="TripAdvisor" />
            <img src="https://static.vecteezy.com/system/resources/previews/016/716/478/original/google-maps-icon-free-png.png" alt="Google Maps" />
            <img src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png" alt="Facebook" />
          </div>
        </div>
    </>
  )
}

export default HomePage