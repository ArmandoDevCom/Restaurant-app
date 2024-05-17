import { useState } from "react"


const platillos = [
  {
    id:"1",
    name:"Coctel de frutas",
    porcion:"200g",
    descripcion:"Fresca combinación de sandía, melón, papaya, piña y manzana con licor marrasquino",
    precio:"$65"
},
{
    id:"2",
    name:"Taquitos de pollo",
    porcion:"4 pzas",
    descripcion:"acompañados de guacamole",
    precio:"$80"
}
];

const MenuPage = () => {

  const [saucers, setSaucer] = useState(platillos)

  const obtenerPlatillos = () => {
    const resp = axios.get("");
  }


  return (
    <>
      <div>
        <h1 className="d-none">Pagina de menu</h1>
      </div>
      <div className="contenedor_titulo_menu">
        <h1 className="titulo_menu">Menú</h1>
      </div>
      <button className="btn btn-primary" onClick={obtenerPlatillos}>Obtener platillos</button>
      <div>
        <div>
        <section className="menu_platillos d-flex flex-wrap">
          {saucers.map((platillo) => {
            return (
              <div key={platillo.id} className="card mb-3" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between tarjeta_platillo">
                  <h3 className="card-title">{platillo.name}</h3>
                  <h6>({platillo.porcion})</h6>
                  <p className="card-text">{platillo.descripcion}</p>
                  <h4 className="card-text">{platillo.precio}</h4>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      </div>
    </>
  );
}

export default MenuPage;