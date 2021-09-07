export const fetchLikes = async () => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FgxwWwDd7byG5fwpAa6v/likes/')
    .then((res) => res.json())
    .then((res) => res);
  return data;
};

export const fetchComments = () => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FgxwWwDd7byG5fwpAa6v/comments/');
};
