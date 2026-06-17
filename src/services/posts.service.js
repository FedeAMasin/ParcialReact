const URL_BASE = 'https://jsonplaceholder.typicode.com/posts';


export const getAllPosts = async () => {
  const res = await fetch(URL_BASE);
  if (!res.ok) {
    throw new Error('No se pudieron cargar los posts');
  }
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${URL_BASE}/${id}`);
  if (!res.ok) {
    throw new Error('No se encontró el post');
  }
  return res.json();
};

export const createPost = async (data) => {
  const res = await fetch(URL_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('No se pudo crear el post');

  return res.json();
};

export const updatePost = async (id, data) => {
  const res = await fetch(`${URL_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...data }),
  });

  if (!res.ok) throw new Error('No se pudo editar el post');

  return res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${URL_BASE}/${id}`, { method: 'DELETE' });

  if (!res.ok) throw new Error('No se pudo eliminar el post');

  return true;
}; 