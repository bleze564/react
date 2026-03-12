import React, { useState } from "react";

export function PokemonsForm({addPokemonName}) {
  const [pokemonName, setpokemonName] = useState("");

  function handleSubmit() {
    e.preventdefault;
    addPokemonName(pokemonName);
    event.preventdefault()
  }
  function handleChange() {
    setpokemonName(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={pokemonName} />
      <button type="submit">pokemon</button>
    </form>
  );
}
