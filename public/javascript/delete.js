const deletePost = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/blogs/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to delete.');
  }
};

document.querySelector('.deleteBtn').addEventListener('click', deletePost);
