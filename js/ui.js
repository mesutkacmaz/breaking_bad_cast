class UI {
  constructor() {
    this.character = document.querySelector('.cards');
  }

  showAllCharacters(characters) {
    characters.forEach(character => {
      this.character.innerHTML += `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="${character.img}" alt="Character">
          </div>
          <div class="card-back">
            <h1>${character.name}</h1>
            <ul>
              <li><strong>Actor Name:</strong> ${character.portrayed}</li>
              <li><strong>Nickname:</strong> ${character.nickname}</li>
              <li><strong>Birthday:</strong> ${character.birthday}</li>
              <li><strong>Status:</strong> ${character.status}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    })
  }

  clearScreen() {
    while (this.character.firstElementChild !== null) {
      this.character.firstElementChild.remove();
    }
  }
}