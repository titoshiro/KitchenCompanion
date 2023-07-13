import { useForm } from 'react-hook-form';
import { useState } from 'react';

const FormControls = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [exitoso, setExitoso] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    fetch('http://127.0.0.1:5000/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          console.log('Formulario enviado exitosamente');
          setExitoso(true);
          setError(false);
        } else {
          console.log('Error al enviar el formulario');
          setExitoso(false);
          setError(true);
        }
      })
      .catch(error => {
        console.log('Error de conexión', error);
        setExitoso(false);
        setError(true);
      });
  }

  return (
    <div className="container">
      <div className="text-center">
        {exitoso ? (
          <div className="alert alert-success" role="alert">
            El formulario se ha enviado exitosamente.
          </div>
        ) : null}
        {error && (
          <div className="alert alert-danger" role="alert">
            Error al enviar el formulario.
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="exampleFormControlInput1"
              placeholder="name@gmail.com"
              {...register('email', { required: 'El correo electrónico es obligatorio' })}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Tu mensaje</label>
            <textarea
              className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Aquí puedes escribir"
              {...register('mensaje', { required: 'El mensaje es obligatorio' })}
            ></textarea>
            {errors.mensaje && <div className="invalid-feedback">{errors.mensaje.message}</div>}
            <button type="submit" className="btn btn-primary m-3">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { FormControls };
