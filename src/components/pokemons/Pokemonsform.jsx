import React, { useState } from "react";

export function PokemonsForm({addPokemonName}) {
  const [pokemonName, setpokemonName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addPokemonName(pokemonName);
  }
  function handleChange(event) {
    setpokemonName(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={pokemonName} />
      <button type="submit">pokemon</button>
    </form>
  );
}
