import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument('posts');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    setFormError('');

    // validate image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError('A Imagem precisa ser uma URL.');
    }

    // criar o array de tags
    const tagsArray = tags.split(',').map(tags => tags.trim().toLowerCase());

    // checar todos os valores
    if (!title || !image || !body || !tags) {
      setFormError('Por favor, preencha todos os campos');
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    setTitle('');
    setImage('');
    setBody('');
    setTags('');

    // redirect to home page
    navigate('/');
  };

  return (
    <div className="container min-vh-100 mt-5 py-5 d-flex flex-column justify-content-center align-items-center gap-3">
      <div className="text-center">
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-100 d-flex flex-column align-items-center"
      >
        <div class="input-group mb-3">
          <span
            class="input-group-text bg-dark text-light"
            id="inputGroup-sizing-default"
          >
            Título
          </span>
          <input
            type="text"
            name="title"
            class="form-control"
            required
            placeholder="Pense num bom título..."
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div class="input-group mb-3">
          <span
            class="input-group-text bg-dark text-light"
            id="inputGroup-sizing-default"
          >
            URL da imagem
          </span>
          <input
            type="text"
            name="image"
            class="form-control"
            required
            placeholder="Insira uma imagem que representa o seu post"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </div>

        <div class="input-group mb-3">
          <span
            class="input-group-text bg-dark text-light"
            id="inputGroup-sizing-default"
          >
            Conteúdo
          </span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            class="form-control"
            aria-label="With textarea"
            value={body}
            onChange={e => setBody(e.target.value)}
          ></textarea>
        </div>

        <div class="input-group mb-3">
          <span
            class="input-group-text bg-dark text-light"
            id="inputGroup-sizing-default"
          >
            Tags
          </span>
          <input
            type="text"
            name="tags"
            class="form-control"
            required
            placeholder="Insira as tags separadas por vírgula"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
        </div>

        {!response.loading && (
          <button className="w-25 btn btn-primary">Cadastrar</button>
        )}
        {response.loading && (
          <button className="w-25 btn btn-primary" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
