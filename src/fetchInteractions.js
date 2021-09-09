const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'FgxwWwDd7byG5fwpAa6v';

export const fetchLikes = async () => fetch(`${baseUrl}${appId}/likes/`)
  .then((res) => res.json())
  .then((res) => res);

export const postLike = async (id) => {
  const data = {
    item_id: id,
  };
  await fetch(`${baseUrl}${appId}/likes/`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  }).then((res) => res.status);
};

export const fetchComments = async (index) => {
  const res = await fetch(`${baseUrl}${appId}/comments?item_id=item${index}`);
  return res.json();
};

export const postComment = async (comment) => {
  const { id, name, commentText } = comment;
  const commentData = {
    item_id: `item${id}`,
    username: name,
    comment: commentText,
  };

  await fetch(`${baseUrl}${appId}/comments`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(commentData),
  }).then((res) => res.status);
};