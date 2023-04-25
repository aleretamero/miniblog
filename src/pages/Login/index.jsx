import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAutentication';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);

    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="d-flex flex-column gap-5 justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <p className='fs-2'>Entrar</p>
        <p>Faça o login para poder utilizar o sistema</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">
            <span>E-mail</span>{' '}
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              required
              placeholder="E-mail do usuário"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            <span>Senha</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
              placeholder="Insira sua senha"
              autoComplete="new-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        {!loading && (
          <button className="btn btn-primary w-100 py-2">Entrar</button>
        )}
        {loading && (
          <button className="btn btn-primary w-100 py-2" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
