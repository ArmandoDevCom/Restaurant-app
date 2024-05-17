import { useParams } from "react-router-dom"

const PlatilloPage = () => {
    const { id, name, porcion, descipcion, precio } = useParams();

  return (
    <>
        <header>
            <h1>Pagina de Platillo</h1>
        </header>
        <main>
            <h2>{name}</h2>
            <article>{id}</article>
        </main>
        {/* <div>
        <section className="menu_platillos d-flex flex-wrap">
          {getData.map((platillo) => {
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
      </div> */}
    </>
  )
}

export default PlatilloPage