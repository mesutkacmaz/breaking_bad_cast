class BreakingBad {

  async getCharacters(character) {
    const characterInfo = await fetch(`https://www.breakingbadapi.com/api/characters?name=${character}`);

    const _character = await characterInfo.json();

    return _character;
  }

  async getAllCharacters() {
    const characters = await fetch(`https://www.breakingbadapi.com/api/characters`);

    const _characters = await characters.json();
    
    return _characters;
  }
}