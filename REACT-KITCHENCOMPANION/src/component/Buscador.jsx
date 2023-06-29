

const Buscador = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary m-5">
        <div className="container justify-content-center">
          <form className="d-flex " role="search">
            <input className="col-12  form-control me-2" type="search" placeholder="Busca recetas o ingredientes" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Buscador;
