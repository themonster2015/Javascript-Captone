export const fetchLikes = async () => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FgxwWwDd7byG5fwpAa6v/likes/')
    .then((res) => res.json())
    .then((res) => res);
  return data;
};

export const postLike = async (id) => {
  const data = {
    item_id: id,
  };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FgxwWwDd7byG5fwpAa6v/likes/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header);

  })
    .then((res) => {
      console.log(res.status);
      return res.status;
    });
};
