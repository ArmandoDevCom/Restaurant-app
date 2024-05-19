import { useState } from "react";
import platillos from "../Data/menudb.json";

const MenuPage = () => {
  const [saucers, setSaucer] = useState(platillos);

  // Agrupar los productos por categoría
  const groupedByCategory = saucers.reduce((acc, platillo) => {
    if (!acc[platillo.categoria]) {
      acc[platillo.categoria] = [];
    }
    acc[platillo.categoria].push(platillo);
    return acc;
  }, {});

  return (
    <>
      <div>
        <h1 className="d-none">Pagina de menu</h1>
      </div>
      <div className="contenedor_titulo_menu">
        <h1 className="titulo_menu">Menú</h1>
      </div>
      <section className="menu_platillos">
        {Object.keys(groupedByCategory).map((categoria) => (
          <div key={categoria}>
            <h2 className="categoria_titulo">{categoria}</h2>
            <div className="categoria_platillos">
              {groupedByCategory[categoria].map((platillo) => (
                <div key={platillo.id} className="card mb-3 card_platillo" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={platillo.imagen} className="img-fluid rounded-start imagen_platillo" alt={platillo.name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body cuerpo_card">
                        <h5 className="card-title">{platillo.name}</h5>
                        <p className="card-text"><small className="text-body-secondary">{platillo.porcion}</small></p>
                        <p className="card-text">{platillo.descripcion}</p>
                        <h4 className="card-text">{platillo.precio}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default MenuPage;
