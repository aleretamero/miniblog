import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument('posts', id);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');
  const [imgPreview, setImgPreview] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);
      setImgPreview(post.image);

      const textTags = post.tagsArray.join(', ');
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument('posts');

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

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    setTitle('');
    setImage('');
    setBody('');
    setTags('');

    // redirect to home page
    navigate('/dashboard');
  };

  return (
    <>
      {post && (
        <div className="container min-vh-100 d-flex flex-column justify-content-start align-items-center gap-3 p-3">
          <div className="text-center">
            <h2>Editando post: {post.title}</h2>
            <p>Altere os dados do post como desejar</p>
          </div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="w-100 d-flex flex-column align-items-center"
          >
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-dark text-light"
                id="inputGroup-sizing-default"
              >
                Título
              </span>
              <input
                type="text"
                name="title"
                className="form-control"
                required
                placeholder="Pense num bom título..."
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text bg-dark text-light"
                id="inputGroup-sizing-default"
              >
                URL da imagem
              </span>
              <input
                type="text"
                name="image"
                className="form-control"
                required
                placeholder="Insira uma imagem que representa o seu post"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <p className="text-center fw-bold">Preview da imagem atual</p>
              <img className="img-fluid" src={imgPreview} alt={post.title} />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-dark text-light"
                id="inputGroup-sizing-default"
              >
                Conteúdo
              </span>
              <textarea
                name="body"
                required
                placeholder="Insira o conteúdo do post"
                className="form-control"
                aria-label="With textarea"
                value={body}
                onChange={e => setBody(e.target.value)}
              ></textarea>
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text bg-dark text-light"
                id="inputGroup-sizing-default"
              >
                Tags
              </span>
              <input
                type="text"
                name="tags"
                className="form-control"
                required
                placeholder="Insira as tags separadas por vírgula"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={tags}
                onChange={e => setTags(e.target.value)}
              />
            </div>

            {!response.loading && (
              <button className="btn btn-primary py-2 px-4">Editar</button>
            )}
            {response.loading && (
              <button className="btn btn-primary py-2 px-4" disabled>
                Aguarde...
              </button>
            )}
            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </div>
      )}
    </>
  );
};

export default EditPost;
