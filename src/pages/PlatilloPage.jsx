import { useParams } from "react-router-dom"

const PlatilloPage = () => {
  const { name, id } = useParams();
  return (
    <>
    <header>
      <title>Nombre del Platillo</title>
    </header>
    <main>
      <article>{name}</article>
      <article>{id}</article>
    </main>
    </>
  )
}

export default PlatilloPage