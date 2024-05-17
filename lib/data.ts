type Character = {
  id: string;
  name: string;
  birthday: string;
  species: string;
  house: string;
  wand: string;
  patronus: string;
  boggart: string;
};

let characters: Character[] = [];

// GET HANDLER
export const getCharacters = () => characters;

// GET BY ID HANDLER
export const getCharacterById = (id: string) => {
  return characters.find((character) => character.id === id);
};

// POST HANDLER
export const addCharacter = (character: Character) => {
  characters.push(character);
};

// DELETE HANDLER
export const deleteCharacter = (id: string) => {
  characters = characters.filter((character) => character.id !== id);
};

// PUT HANDLER
export const updateCharacter = (  id: string, name: string, birthday: string, species: string, house: string, wand: string, patronus: string, boggart: string) => {
  const character = characters.find((character) => character.id === id);
  if (character) {
    character.name = name;
    character.birthday = birthday;
    character.species = species;
    character.house = house;
    character.wand = wand;
    character.patronus = patronus;
    character.boggart = boggart;
  } else {
    throw new Error("Character not found.");
  }
};