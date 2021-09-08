import { fetchPokeStats } from './fetchPoke.js';
import { fetchComments, postComment } from './fetchInteractions.js';

const commentModalDiv = document.querySelector('.comments-modal');

const countComments = (comments) => (comments.length > 0 ? comments.length : 0);

const loadPokeDetail = async (imgUrl, pokeName, index) => {
  index += 1;
  const stats = await fetchPokeStats(index);
  const comments = await fetchComments(index);
  const commentsCount = countComments(comments);

  const html = `
  <article class="d-flex flex-column justify-content-center">
    <button class="close-modal">&times;</button>
    <div class="pokemon__img__container d-flex justify-content-center w-100">
      <img class="pokemon__img" src="${imgUrl}" />
    </div>
    <div class="pokemon__data">
      <h3 class="pokemon__name text-center mt-3 text-primary">${pokeName}</h3>
      <div class="d-flex justify-content-between">
        <p class="pokemon__row"><span class="badge bg-primary">Height:</span>${stats.height}</p>
        <p class="pokemon__row"><span class="badge bg-primary">Moves:</span>${stats.moves}</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="pokemon__row"><span class="badge bg-primary mr-5">Weight:</span>${stats.weight}</p>
        <p class="pokemon__row"><span class="badge bg-primary">Order:</span>${stats.order}</p>
      </div>
    </div>
    <div class="comment-form my-2">
        <h5 class="text-center text-primary">Comments(${commentsCount})</h5>
        <div id="comments"></div>
        <h5 class="text-center text-primary mt-2">Add a comment</h5>
        <div class="mb-3">
          <input type="text" class="form-control name-input" placeholder="Your name">
        </div>
        <div class="mb-3">
          <textarea class="form-control comment-input" rows="3" placeholder="Your insights"></textarea>
        </div>
        <button type="submit" class="add btn btn-primary">Comment</button>
    </div>
  </article>

  `;
  commentModalDiv.insertAdjacentHTML('beforeend', html);
  commentModalDiv.classList.remove('hidden');

  const commentsDiv = document.getElementById('comments');

  if (commentsCount > 0) {
    comments.forEach((comment) => {
      const paragraph = document.createElement('p');
      paragraph.innerHTML = `<span> ${comment.creation_date} </span>
                       <span> ${comment.username}: </span>
                       <span> ${comment.comment} </span>`;

      commentsDiv.appendChild(paragraph);
    });
  }

  const btnCloseModal = document.querySelector('.close-modal');
  const closeModal = () => {
    commentModalDiv.classList.add('hidden');
    commentModalDiv.innerHTML = '';
  };

  const addComment = async (idx) => {
    const nameInput = document.querySelector('.name-input').value;
    const commentInput = document.querySelector('.comment-input').value;
    postComment(idx, nameInput, commentInput);
  };

  btnCloseModal.addEventListener('click', closeModal.bind(null));

  const fSubmit = document.querySelector('.add');
  fSubmit.addEventListener('click', addComment.bind(null, index));
};

export default loadPokeDetail;