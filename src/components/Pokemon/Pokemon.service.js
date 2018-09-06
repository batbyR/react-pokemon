export const getFirstAbility = pokemon => {
  if (pokemon.abilities.length === 0) {
    return null;
  } else return pokemon.abilities[0].ability.name;
};

export const convertPoundsToKilograms = pounds => pounds * 0.45359237;
