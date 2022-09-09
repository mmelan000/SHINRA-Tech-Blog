const id = document.location.pathname.substring(6);
const edit_title = document.querySelector('#typeEditTitle');
const edit_text = document.querySelector('#typeEditText');

const populateEdit = async function () {
  const response = await (await fetch(`/api/blogs/${id}`)).json();

  edit_title.setAttribute('value', response.blog_title);
  edit_text.innerHTML = response.blog_text;
};

const editPost = async (event) => {
  event.preventDefault();

  const blog_title = edit_title.value;
  const blog_text = edit_text.value;
  const user_id = event.target.id;

  const response = await fetch(`/api/blogs/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ blog_title, blog_text, user_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert('Failed to submit edits.');
  }
};
populateEdit();

document.querySelector('.editBtn').addEventListener('click', editPost);
