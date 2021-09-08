import { fetchPokeStats } from './fetchPoke.js';
import { fetchComments } from './fetchInteractions.js';

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
        <p class="pokemon__row"><span>Height:</span>${stats.height}</p>
        <p class="pokemon__row"><span>Moves:</span>${stats.moves}</p>
      </div>
      <div class="d-flex justify-content-between">
        <p class="pokemon__row"><span>Weight:</span>${stats.weight}</p>
        <p class="pokemon__row"><span>Order:</span>${stats.order}</p>
      </div>
    </div>
    <div class="comment-form my-3">
        <h4 class="text-center text-primary">Comments(${commentsCount})</h4>
        <div id="comments"></div>
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

  btnCloseModal.addEventListener('click', closeModal.bind(null));
};

export default loadPokeDetail;