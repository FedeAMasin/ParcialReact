import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/posts.service';
import FormularioPost from '../components/FormularioPost';

function NuevoPost() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await createPost(data);
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1>Nuevo Post</h1>
      <FormularioPost onCreate={handleCreate} />
    </div>
  );
}

export default NuevoPost;