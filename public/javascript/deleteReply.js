const deleteReply = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/replies/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to delete.');
  }
};

document.querySelector('.deleteBtn').addEventListener('click', deleteReply);
