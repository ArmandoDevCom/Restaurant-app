import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg barra_menu">
  <div className="container contenedor_barra_menu">
    <NavLink className="logosake" to="/">
      <img src="/img/logo_restaurante_mex.png" alt />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse enlaces_menu" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link active" to="/"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Home</font></font></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Menú</font></font></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/reservacion"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Reservaciones</font></font></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/nosotros"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Nosotros</font></font></NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search" wtx-context="0E43AC67-7E76-43D6-8851-1414130E106F">
        <input className="form-control me-2" type="search" placeholder="Buscar platillo" aria-label="Buscar" wtx-context="5EA8204E-BCBD-4AA2-850F-25A1E47D97F8" />
        <button className="btn btn-dark" type="submit"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Buscar</font></font></button>
      </form>
      <button type="button" className="btn btn-primary m-3">Iniciar sesión</button>
    </div>
  </div>
</nav>


  )
}

export default NavBar