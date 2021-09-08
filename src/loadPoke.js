import { postLike } from './fetchInteractions';
import countPokemons from './countPokemons';
import loadPokeDetail from './loadPokeDetail.js';


const list = document.getElementsByClassName('list');
const el = document.getElementById('pokeCounter');

const loadPoke = (data, likes) => {
  const countPoke = countPokemons(data);
  el.innerHTML = `Pokemons(${countPoke})`;

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
    const pokeName = poke.name.slice(0, 1).toUpperCase() + poke.name.slice(1);
    name.innerHTML = pokeName;
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
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`;
    img.setAttribute('src', imgUrl);
    img.setAttribute('alt', 'Pokemon');
    img.classList.add('pokeImg', 'card-img-top');
    const commentBtn = document.createElement('btn');
    commentBtn.classList.add('cmtBtn', 'btn', 'btn-outline-dark', 'btn-lg');
    commentBtn.innerText = 'Comments';
    commentBtn.addEventListener('click', loadPokeDetail.bind(this, imgUrl, pokeName, index));

    wrapper.appendChild(img);
    description.appendChild(name);
    description.appendChild(likeDiv);
    cardBody.appendChild(description);
    cardBody.appendChild(commentBtn);
    wrapper.appendChild(cardBody);
    list[0].appendChild(wrapper);
  });
};

export default loadPoke;