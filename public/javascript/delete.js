const deletePost = async (event) => {
  event.preventDefault();

  console.log(event.target.id);

  const response = await fetch(`/api/blogs/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashbaord');
  } else {
    alert('Failed to delete.');
  }
};

document.querySelector('.deleteBtn').addEventListener('click', deletePost);
