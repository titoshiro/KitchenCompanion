const FormControls = () => {
  return (
    <div className="container">
    <div className="text-center">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@gmail.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Tu mensaje</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Aqui puedes escribir"></textarea>
        <button type="button" className="btn btn-primary m-3">Enviar</button>
      </div>
    </div>
    </div>
  );
}

export { FormControls };
