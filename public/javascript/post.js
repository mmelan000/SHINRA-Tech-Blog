const replyPost = async (event) => {
  event.preventDefault();

  const blog_title = document.querySelector('#typePostTitle').value;
  const blog_text = document.querySelector('#typePostText').value;
  const user_id = event.target.id;

  console.log(blog_title);
  console.log(blog_text);
  console.log(user_id);

  console.log({ blog_title, blog_text, user_id });

  const response = await fetch(`/api/blogs/`, {
    method: 'POST',
    body: JSON.stringify({ blog_title, blog_text, user_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert('Failed to submit reply.');
  }
};

document.querySelector('.postBtn').addEventListener('click', replyPost);
