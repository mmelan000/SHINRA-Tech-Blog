const id = document.location.pathname.substring(11);
const edit_text = document.querySelector('#typeEditText');
let blogId;

const populateEdit = async function () {
  const response = await (await fetch(`/api/replies/${id}`)).json();
  blogId = response.blog_id;
  edit_text.innerHTML = response.reply_text;
};

const editPost = async (event) => {
  event.preventDefault();

  const reply_text = edit_text.value;
  const user_id = event.target.id;

  const response = await fetch(`/api/replies/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ reply_text, user_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/blog/${blogId}`);
  } else {
    alert('Failed to submit edits.');
  }
};
populateEdit();

document.querySelector('.editBtn').addEventListener('click', editPost);
