import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAutentication';

const Register = () => {
  //
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    const user = {
      displayName,
      email,
      password,
      confirmPassword,
    };

    if (password !== confirmPassword) {
      setError('As senha precisam ser iguais');
      return;
    }

    const res = await createUser(user);

    console.log(res);

    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="d-flex flex-column gap-5 p-3 justify-content-start align-items-center min-vh-100">
      <div className="text-center">
        <p className="fs-2">Cadastre-se para postar</p>
        <p>Crie seu usuário e compartilhe suas histórias</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">
            <span>Nome</span>{' '}
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="displayName"
              required
              placeholder="Nome do usuário"
              autoComplete="name"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
          </label>
        </div>

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

        <div className="mb-2">
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

        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            <span>Confirmação de senha</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="confirmPassword"
              required
              placeholder="Confirme a sua senha"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>

        {!loading && (
          <button className="btn  btn-primary w-100 py-2">Cadastrar</button>
        )}
        {loading && (
          <button className="btn  btn-primary w-100 py-2" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
