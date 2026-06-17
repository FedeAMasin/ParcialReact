const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPosts = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Error al obtener los posts');
  return response.json();
};

export const getPostById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Error al obtener el post');
  return response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error('Error al crear el post');
  return response.json();
};

export const updatePost = async (id, postData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, ...postData }),
  });
  if (!response.ok) throw new Error('Error al editar el post');
  return response.json();
};

export const deletePost = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar el post');
  return true;
};