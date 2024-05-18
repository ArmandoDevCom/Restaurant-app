import BookinForm from "../components/BookinForm"
import NavBar from "../components/NavBar"

const BookingPage = () => {
  return (
      <><div className="contenedor_form">
          <div className="contenedor_form_img">
          </div>
          <div className="contenedor_bookingform">
            <h1>Reserva una mesa</h1>
            <BookinForm />
          </div>
        </div>
      </>
  )
}

export default BookingPage