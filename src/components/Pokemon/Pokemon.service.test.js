import {getFirstAbility, convertPoundsToKilograms} from "./Pokemon.service";
import React from "react";

const emptyPokemon = {
  abilities: []
};
const pokemon = {
  abilities: [
    {
      ability: {
        name: "chlorophyll"
      }
    }
  ]
};

describe("Tests for getFirstAbility", () => {
  it("Should return null if there is no abilities", () => {
    expect(getFirstAbility(emptyPokemon)).toEqual(null);
  });
  it("Should return the first ability", () => {
    expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
  });
});

describe("Tests for convertPoundsToKilograms", () => {
  it("Should convert one pound", () => {
    expect(convertPoundsToKilograms(1)).toEqual(0.45359237);
  });
  it("Should convert 300 pounds", () => {
    expect(convertPoundsToKilograms(300)).toEqual(136.077711);
  });
});
