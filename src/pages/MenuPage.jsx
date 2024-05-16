import NavBar from "../components/NavBar"

const MenuPage = () => {
  return (
    <>
    <NavBar />
    <div>
      <h1>Pagina de menu</h1>
    </div>
    <div className="contenedor_titulo_menu">
    <h1 className="titulo_menu">ENTRADAS</h1>
    </div>
    <section className="menu_platillos">
<div className="card tarjeta_platillo" style={{width: '18rem'}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</section>
</>
)
}

export default MenuPage