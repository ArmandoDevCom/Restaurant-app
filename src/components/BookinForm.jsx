const BookinForm = () => {
  return (
    <>
        <div className="container">
        <form className="row g-3 needs-validation formulario_contacto" noValidate>
  <div className="col-md-6">
    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="validationCustom01"  required />
    <div className="valid-feedback">
      Luce bien!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="validationCustom02"  required />
    <div className="valid-feedback">
    Luce bien!
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">Fecha</label>
    <input type="date" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Por favor proporcione una fecha valida.
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">Hora</label>
    <input type="time" className="form-control" id="validationCustom03" required />
    <div className="invalid-feedback">
      Por favor proporcione una hora valida.
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">Mail</label>
    <input type="email" className="form-control" id="validationCustom03"  required />
    <div className="invalid-feedback">
        Escribe un correo electrónico valido.
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">Teléfono</label>
    <input type="tel" className="form-control" id="validationCustom03"  required />
    <div className="invalid-feedback">
        Escribe un número telefónico valido.
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">Número de Personas</label>
    <input type="number" className="form-control" id="validationCustom03"  required />
    <div className="invalid-feedback">
        Escribe un número telefónico valido.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" defaultValue id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
      Acepto términos y condiciones
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Enviar reservación</button>
  </div>
</form>

        </div>
    </>
  )
}

export default BookinForm