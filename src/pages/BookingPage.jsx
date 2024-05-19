import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import BookinForm from '../components/BookinForm';
import NavBar from '../components/NavBar';

const BookingPage = () => {
  const [reservaciones, setReservaciones] = useState([]);

  const obtenerReservaciones = async () => {
    const reservacionesCollection = collection(db, 'reservaciones');
    const reservacionesSnapshot = await getDocs(reservacionesCollection);
    const reservacionesList = reservacionesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setReservaciones(reservacionesList);
  };

  useEffect(() => {
    obtenerReservaciones();
  }, []);

  const handleReservationAdded = () => {
    obtenerReservaciones();
  };

  return (
    <>
      <div className="contenedor_form">
        <div className="contenedor_form_img">
          <img src="https://fotografias.lasexta.com/clipping/cmsimages01/2023/10/02/E7633736-8F43-46EF-AB0E-169330813188/amigos_104.jpg?crop=837,837,x210,y0&width=1200&height=1200&optimize=low&format=webply" alt="" />
        </div>
        <div className="contenedor_bookingform">
          <h1>Reserva una mesa</h1>
          <BookinForm onReservationAdded={handleReservationAdded} />
        </div>
      </div>
      <div className="contenedor_tabla_reservaciones">
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Fecha</th>
              <th scope="col">Hora</th>
              <th scope="col">Email</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Personas</th>
            </tr>
          </thead>
          <tbody>
            {reservaciones.map((reservacion, index) => (
              <tr key={reservacion.id}>
                <th scope="row">{index + 1}</th>
                <td>{reservacion.nombre}</td>
                <td>{reservacion.apellido}</td>
                <td>{reservacion.fecha}</td>
                <td>{reservacion.hora}</td>
                <td>{reservacion.email}</td>
                <td>{reservacion.tel}</td>
                <td>{reservacion.personas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookingPage;
