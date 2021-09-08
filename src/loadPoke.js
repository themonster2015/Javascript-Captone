import { postLike } from './fetchInteractions.js';
import loadPokeDetail from './loadPokeDetail.js';

const list = document.getElementsByClassName('list');

const loadPoke = (data, likes) => {
  data.forEach((poke, index) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('card');
    const img = document.createElement('img');
    const description = document.createElement('div');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    description.classList.add('description');
    const name = document.createElement('span');
    name.classList.add('card-title');
    name.innerHTML = poke.name.slice(0, 1).toUpperCase() + poke.name.slice(1);
    const likeDiv = document.createElement('div');
    likeDiv.classList.add('d-flex', 'flex-column');
    let likeCount;
    const item = likes.filter((i) => i.item_id === poke.name);
    if (item.length === 0) {
      likeCount = 0;
    } else {
      likeCount = item[0].likes;
    }
    const likeBtn = document.createElement('btn');
    likeBtn.classList.add('btn');
    likeBtn.innerHTML += "<i class='fa fa-heart' aria-hidden='true'></i>";
    likeBtn.addEventListener('click', () => {
      postLike(poke.name).then(() => {
        window.location.reload();
      });
    });

    likeDiv.appendChild(likeBtn);
    const likeCounter = document.createElement('span');
    likeCounter.innerHTML = `${likeCount} likes`;
    wrapper.classList.add('pokeWrapper');
    likeDiv.appendChild(likeCounter);
    img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`);
    img.setAttribute('alt', 'Pokemon');
    img.classList.add('pokeImg', 'card-img-top');
    const btn = document.createElement('btn');
    btn.classList.add('cmtBtn', 'btn', 'btn-outline-dark', 'btn-lg');
    btn.innerText = 'Comments';

    wrapper.appendChild(img);
    description.appendChild(name);
    description.appendChild(likeDiv);
    cardBody.appendChild(description);
    cardBody.appendChild(btn);
    wrapper.appendChild(cardBody);
    list[0].appendChild(wrapper);
  });
};

export default loadPoke;