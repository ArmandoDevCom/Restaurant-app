import { useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fecha: '',
    hora: '',
    email: '',
    tel: '',
    personas: '',
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setFormValid(isValid);
  };

  const crearReservacion = async (e) => {
    e.preventDefault();
    try {
      const reservacion = { ...formData };
      const reservacionesCollection = collection(db, 'reservaciones');
      await addDoc(reservacionesCollection, reservacion);
      alert('Reservación creada con éxito');
      setFormData({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: '',
        email: '',
        tel: '',
        personas: '',
      });
      setFormValid(false);
    } catch (error) {
      console.error('Error al crear la reservación: ', error);
      alert('Hubo un error al crear la reservación, por favor intente nuevamente');
    }
  };

  return (
    <div className="container">
      <form className="row g-3 needs-validation formulario_contacto" noValidate onSubmit={crearReservacion}>
        <div className="col-md-6">
          <label htmlFor="validationCustom01" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Luce bien!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom02" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
          <div className="valid-feedback">Luce bien!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">Fecha</label>
          <input
            type="date"
            className="form-control"
            id="validationCustom03"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Por favor proporcione una fecha válida.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom04" className="form-label">Hora</label>
          <input
            type="time"
            className="form-control"
            id="validationCustom04"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Por favor proporcione una hora válida.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="validationCustom05"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Escribe un correo electrónico válido.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom06" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="validationCustom06"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Escribe un número telefónico válido.</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom07" className="form-label">Número de Personas</label>
          <input
            type="number"
            className="form-control"
            id="validationCustom07"
            name="personas"
            value={formData.personas}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Escribe un número de personas válido.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Acepto términos y condiciones
            </label>
            <div className="invalid-feedback">Debes aceptar antes de enviar.</div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" disabled={!formValid}>Enviar reservación</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
