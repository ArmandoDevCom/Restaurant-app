import { useState } from "react"

const platillos = [
  {
    id:"1",
    name:"Coctel de frutas",
    porcion:"200g",
    descripcion:"Fresca combinación de sandía, melón, papaya, piña y manzana con licor marrasquino",
    precio:"$65",
  },
  {
    id:"2",
    name:"Guacamole",
    porcion:"120g",
    descripcion:"Servido sobre hoja de lechuga con totopos y queso cotija",
    precio:"$60",
  },
  {
    id:"3",
    name:"Taquitos de pollo",
    porcion:"4 pzas",
    descripcion:"Con salsa noche y queso cotija",
    precio:"$80",
  },
]


const MenuPage = () => {

  const [saucer, setSaucer] = useState(platillos)

  return (
    <>
    <div>
      <h1>Pagina de menu</h1>
    </div>
    <div className="contenedor_titulo_menu">
    <h1 className="titulo_menu">ENTRADAS</h1>
    </div>
  <div>
  <section className="menu_platillos d-flex flex-wrap">
    {
      saucer.map((platillo) => {
        return (
  
      <div key={platillo.id} className="card mb-3" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between tarjeta_platillo">
        <h3 className="card-title">{platillo.name}</h3>
        <h6>({platillo.porcion})</h6>
        <p className="card-text">{platillo.descripcion}</p>
        <h4 className="card-text">{platillo.precio}</h4>
      </div>
    </div>


        )
      })
    }
  </section>
  </div>
</>
)
}

export default MenuPage