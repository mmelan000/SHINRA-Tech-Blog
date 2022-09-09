const replyPost = async (event) => {
  event.preventDefault();

  const reply_text = document.querySelector('#typeReply').value;
  const user_id = event.target.id;
  const blog_id = document.location.pathname.substring(6);

  console.log(reply_text);
  console.log(user_id);
  console.log(blog_id);

  const response = await fetch(`/api/replies/`, {
    method: 'POST',
    body: JSON.stringify({ reply_text, user_id, blog_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace(`/blog/${blog_id}`);
  } else {
    alert('Failed to submit reply.');
  }
};

document.querySelector('.replyBtn').addEventListener('click', replyPost);
