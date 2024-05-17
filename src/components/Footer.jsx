import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="pie_pagina bg-dark">
        <div>
          <div><NavLink className="" to="/">
      <img src="/img/logo_restaurante_mex.png" alt />
    </NavLink>
          </div>
          <div className="contenedor_iconos">
          <a href="https://www.facebook.com"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com"><i class="bi bi-instagram"></i></a>
          <a href="https://www.twitter.com"><i class="bi bi-twitter-x"></i></a>
          <a href="https://www.tiktok.com"><i class="bi bi-tiktok"></i></a>
          </div>
        </div>
        <div className="contenedor_links_footer">
          <div className="contenedor_links_footer_izq">
                        <h3>Legales</h3>
                        <ul>
                            <li><a href="#">Política de Privacidad</a></li>
                            <li><a href="#">Términos y Condiciones</a></li>
                            <li><a href="#">Política de Reembolsos</a></li>
                        </ul>
          </div>
          <div className="contenedor_links_footer_der">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            <li><a href="#">Paquetes</a></li>
                            <li><a href="#">Promociones</a></li>
                            <li><a href="#">Categorías</a></li>
                            <li><a href="#">Sucursales</a></li>
                        </ul>
          </div>
        </div>
      </div>
      <div className="my_copy"><h6>Proyecto desarrollado por: <a href="https://github.com/ArmandoDevCom">Hugo Duran</a><p /></h6></div>

    </>
  )
}

export default Footer