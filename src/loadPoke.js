const list = document.getElementsByClassName('list');

const loadPoke = (data, likes) => {
  data.forEach((poke, index) => {
    const wrapper = document.createElement('div');
    const img = document.createElement('img');
    const description = document.createElement('div');
    description.classList.add('description');
    const name = document.createElement('span');
    name.innerHTML = poke.name;
    const likeDiv = document.createElement('div');
    likeDiv.innerHTML = `<i class='fa fa-heart' aria-hidden='true'></i><span>${likes[0].likes} likes</span>`;
    wrapper.classList.add('pokeWrapper');
    img.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`);
    img.setAttribute('alt', 'Pokemon');
    img.classList.add('pokeImg');
    const btn = document.createElement('btn');
    btn.classList.add('cmtBtn');
    btn.innerText = 'Comments';

    wrapper.appendChild(img);
    description.appendChild(name);
    description.appendChild(likeDiv);
    wrapper.appendChild(description);
    wrapper.appendChild(btn);
    list[0].appendChild(wrapper);
  });
};

export default loadPoke;