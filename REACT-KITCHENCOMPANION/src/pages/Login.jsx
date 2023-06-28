import { useContext } from 'react'
import { Context } from '../store/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <div>Login</div>
      <form onSubmit={(e) => actions.login(e, navigate)}>
        <input type="email" id="username" name='username' placeholder='john.doe@gmail.com'
          value={store.username}
          onChange={actions.handleChange} />
        <input type="password" id="password" name='password' placeholder='****'
          value={store.password}
          onChange={actions.handleChange} />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login